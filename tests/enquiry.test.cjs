const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { createServer } = require('node:http');

const modules = Promise.all([import('../src/lib/enquiry.mjs'), import('../server/enquiry.mjs')]);
const fields = { name: '=Student', phone: '9980481450', email: 'student@example.com', program: 'BCA', message: '=Please arrange a visit', purpose: 'visit' };
const fingerprint = data => JSON.stringify(['name', 'phone', 'email', 'program', 'message', 'purpose'].map(key => data[key]));
const hash = data => crypto.createHash('sha256').update(fingerprint(data)).digest('base64url');
const submission = (changes = {}) => {
  const data = { ...fields, ...changes };
  return { ...data, receipt: `${crypto.randomUUID()}:${hash(data)}`, action: 'submit' };
};
const headers = ['Date & Time', 'Institution', 'Name', 'Email Address', 'Phone Number', 'Program', 'Message', 'Enquiry Type', 'Submission Receipt', 'Status', 'Notes'];
const env = { ENQUIRY_SCRIPT_URL: 'https://script.google.com/macros/s/test/exec', ENQUIRY_SCRIPT_SECRET: 'test-secret' };
const saved = { ok: true, code: 'SAVED', protocol: 1, institution: 'NDRK FGC' };
const request = data => new Request('https://college.example/api/enquiry', {
  method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://college.example' }, body: JSON.stringify(data),
});

function scriptHarness(options = {}) {
  const rows = [[...headers]];
  let held = false, loseAcknowledgement = false, capacity = options.capacity || 1000;
  let changedUnderLock = false;
  const plain = value => typeof value === 'string' && value.startsWith("'") ? value.slice(1) : value;
  const sheet = {
    getMaxColumns: () => 11, getLastRow: () => rows.length, getMaxRows: () => capacity,
    insertRowsAfter: (after, count) => { assert.ok(held); assert.equal(after, capacity); capacity += count; },
    getRange(row, column, height = 1, width = 1) {
      const range = {
        getDisplayValues: () => rows.slice(row - 1, row - 1 + height).map(values => values.slice(column - 1, column - 1 + width).map(value => String(plain(value)))),
        getValues: () => rows.slice(row - 1, row - 1 + height).map(values => values.slice(column - 1, column - 1 + width).map(plain)),
        setNumberFormat: format => { assert.equal(format, 'yyyy-mm-dd hh:mm:ss'); return range; },
        setValues: values => { assert.ok(held, 'writes require a script lock'); assert.ok(row <= capacity); rows[row - 1] = values[0]; },
        createTextFinder: receipt => ({ matchEntireCell(value) { assert.equal(value, true); return this; }, useRegularExpression(value) { assert.equal(value, false); return this; }, findNext: () => rows.slice(1).find(values => values[column - 1] === receipt) || null }),
      };
      return range;
    },
  };
  const sandbox = {
    Date,
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: text => ({ setMimeType: () => JSON.parse(text) }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: key => { assert.equal(key, 'ENQUIRY_SCRIPT_SECRET'); return 'test-secret'; } }) },
    SpreadsheetApp: {
      openById: id => { assert.equal(id, '12j_Rs6qbmOdJ_YgvaNf9gChZbgCbBUzm-mG-0EtNHTM'); return { getSheetByName: tab => { assert.equal(tab, 'NDRK FGC'); return options.missingSheet ? null : sheet; } }; },
      flush: () => { if (loseAcknowledgement) { loseAcknowledgement = false; throw Error('response lost after write'); } },
    },
    LockService: { getScriptLock: () => ({
      waitLock: () => { assert.equal(held, false); held = true; if (changedUnderLock) rows[0][8] = 'Wrong'; },
      hasLock: () => held, releaseLock: () => { held = false; },
    }) },
    Utilities: { Charset: { UTF_8: 'utf8' }, DigestAlgorithm: { SHA_256: 'sha256' }, computeDigest: (_, value) => crypto.createHash('sha256').update(value).digest(), base64EncodeWebSafe: value => value.toString('base64url') },
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync('docs/enquiry-google-apps-script.gs', 'utf8'), sandbox);
  return {
    rows,
    loseNextAcknowledgement: () => { loseAcknowledgement = true; },
    changeHeadersUnderLock: () => { changedUnderLock = true; },
    raw: event => sandbox.doPost(event),
    send: data => sandbox.doPost({ postData: { contents: JSON.stringify({ secret: 'test-secret', institution: 'NDRK FGC', ...data }) } }),
    isLocked: () => held,
  };
}

test('normalizes +91 and rejects malformed fields, programs and enquiry types', async () => {
  const [shared] = await modules;
  assert.equal(shared.normalizeEnquiry({ ...fields, phone: '+91 99804 81450' }).phone, fields.phone);
  for (const change of [{ phone: '123' }, { phone: '99804x81450' }, { phone: '+1 9980481450' }, { email: 'invalid' }, { program: 'PCMB' }, { name: ' ' }, { purpose: 'other' }]) {
    assert.equal(shared.normalizeEnquiry({ ...fields, ...change }), null);
  }
  assert.equal(shared.enquiryFingerprint(fields), fingerprint(fields));
});

test('writes exact A-K layout, literal text, automatic type and blank staff columns', () => {
  const script = scriptHarness(), data = submission();
  assert.deepEqual(script.send(data), saved);
  assert.equal(script.rows.length, 2);
  assert.equal(script.rows[1].length, 11);
  assert.ok(script.rows[1][0] instanceof Date);
  assert.deepEqual(Array.from(script.rows[1].slice(1)), ["'NDRK First Grade College", "'=Student", "'student@example.com", "'9980481450", "'BCA", "'=Please arrange a visit", "'Campus Visit", data.receipt, '', '']);
  assert.equal(script.isLocked(), false);
  for (const program of ['B.Com', 'M.Com', 'BCA', 'BBA']) {
    const admission = scriptHarness();
    assert.equal(admission.send(submission({ purpose: 'apply', program })).code, 'SAVED');
    assert.equal(admission.rows[1][7], "'Admission");
  }
});

test('same receipt is idempotent and status never inserts a row', () => {
  const script = scriptHarness(), data = submission();
  assert.equal(script.send({ ...data, action: 'status' }).code, 'NOT_FOUND');
  assert.equal(script.send(data).code, 'SAVED');
  assert.equal(script.send(data).code, 'SAVED');
  assert.equal(script.send({ action: 'status', receipt: data.receipt }).code, 'SAVED');
  assert.equal(script.rows.length, 2);
});

test('lost acknowledgement after save is recovered without duplicate rows', () => {
  const script = scriptHarness(), data = submission();
  script.loseNextAcknowledgement();
  assert.equal(script.send(data).code, 'UNKNOWN');
  assert.equal(script.isLocked(), false);
  assert.equal(script.send({ ...data, action: 'status' }).code, 'SAVED');
  assert.equal(script.send(data).code, 'SAVED');
  assert.equal(script.rows.length, 2);
});

test('same phone with another receipt is rate limited until cooldown expires', () => {
  const script = scriptHarness();
  assert.equal(script.send(submission()).code, 'SAVED');
  assert.equal(script.send(submission()).code, 'RATE_LIMIT');
  assert.equal(script.rows.length, 2);
  script.rows[1][0] = new Date(Date.now() - 61000);
  assert.equal(script.send(submission()).code, 'SAVED');
  assert.equal(script.rows.length, 3);
});

test('rejects wrong secret, institution, headers, missing tab and tampered receipt', () => {
  const script = scriptHarness();
  assert.equal(script.send({ ...submission(), secret: 'wrong' }).code, 'AUTH');
  assert.equal(script.send({ ...submission(), institution: 'NDRK PU' }).code, 'INSTITUTION');
  for (const change of [{ name: 'changed' }, { purpose: 'apply' }, { message: 'changed' }]) {
    assert.equal(script.send({ ...submission(), ...change }).code, 'INVALID_RECEIPT');
  }
  assert.equal(scriptHarness({ missingSheet: true }).send(submission()).code, 'SHEET');
  script.rows[0][8] = 'Wrong header';
  assert.equal(script.send(submission()).code, 'HEADERS');
  assert.equal(script.rows.length, 1);
});

test('rechecks headers under lock and grows full sheets', () => {
  const changed = scriptHarness(); changed.changeHeadersUnderLock();
  assert.equal(changed.send(submission()).code, 'HEADERS');
  assert.equal(changed.rows.length, 1);
  assert.equal(changed.isLocked(), false);
  assert.equal(scriptHarness({ capacity: 1 }).send(submission()).code, 'SAVED');
});

test('script rejects malformed events and invalid field types without writes', () => {
  const script = scriptHarness();
  assert.equal(script.raw(undefined).code, 'VALIDATION');
  for (const contents of ['null', '[]', '{broken', 'x'.repeat(24001)]) assert.equal(script.raw({ postData: { contents } }).ok, false);
  for (const change of [{ phone: '123' }, { email: 'invalid' }, { program: 'bad' }, { purpose: 'bad' }, { message: 123 }, { name: ' ' }]) assert.equal(script.send(submission(change)).code, 'VALIDATION');
  assert.equal(script.rows.length, 1);
});

test('optional message accepts empty and maximum Unicode; rejects invalid input', async () => {
  const [shared] = await modules;
  for (const message of ['', '\u0905'.repeat(3000)]) {
    assert.equal(shared.normalizeEnquiry({ ...fields, message }).message, message);
    const script = scriptHarness();
    assert.equal(script.send(submission({ message })).code, 'SAVED');
    assert.equal(script.rows[1][6], message ? "'" + message : '');
  }
  for (const message of ['a'.repeat(3001), 123, null]) assert.equal(shared.normalizeEnquiry({ ...fields, message }), null);
});

test('endpoint verifies institution/protocol and keeps credentials server-side', async () => {
  const [, server] = await modules;
  const post = server.createEnquiryEndpoint({ env, fetchImpl: async (url, options) => {
    assert.equal(url, env.ENQUIRY_SCRIPT_URL);
    const data = JSON.parse(options.body);
    assert.equal(data.secret, 'test-secret'); assert.equal(data.institution, 'NDRK FGC');
    assert.equal(data.message, fields.message); assert.equal(data.purpose, 'visit');
    return Response.json(saved);
  } });
  const result = await post(request({ ...submission(), secret: 'client-secret', institution: 'wrong' }));
  assert.equal(result.status, 200); assert.equal(result.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await result.json(), { ok: true, code: 'SAVED' });
});

test('endpoint never reports success for HTML, timeouts or incorrect acknowledgements', async () => {
  const [, server] = await modules;
  for (const upstream of [async () => new Response('<html>Sign in</html>'), async () => { throw Error('timeout'); },
    async () => Response.json({ ...saved, protocol: 4 }), async () => Response.json({ ...saved, institution: 'NDRK PU' }),
    async () => Response.json({ ...saved, code: 'UNKNOWN' }), async () => Response.json(saved, { status: 500 })]) {
    const response = await server.createEnquiryEndpoint({ env, fetchImpl: upstream })(request(submission()));
    assert.equal(response.status, 502); assert.equal((await response.json()).code, 'UNKNOWN');
  }
});

test('endpoint rejects config, invalid fields, size, origin, method and receipt before Google', async () => {
  const [, server] = await modules;
  const noFetch = async () => assert.fail('must not contact Google');
  const post = server.createEnquiryEndpoint({ env, fetchImpl: noFetch });
  assert.equal((await server.createEnquiryEndpoint({ env: {}, fetchImpl: noFetch })(request(submission()))).status, 503);
  assert.equal((await server.createEnquiryEndpoint({ env: { ...env, ENQUIRY_SCRIPT_URL: 'http://example.com' }, fetchImpl: noFetch })(request(submission()))).status, 503);
  assert.equal((await post(request(submission({ phone: '123' })))).status, 400);
  assert.equal((await post(request({ ...submission(), padding: 'x'.repeat(25000) }))).status, 413);
  assert.equal((await post(request({ ...submission(), message: 'tampered' }))).status, 400);
  assert.equal((await post(request({ ...submission(), receipt: [submission().receipt] }))).status, 400);
  const crossOrigin = request(submission()); crossOrigin.headers.set('origin', 'https://other.example');
  assert.equal((await post(crossOrigin)).status, 403);
  const missingOrigin = request(submission()); missingOrigin.headers.delete('origin');
  assert.equal((await post(missingOrigin)).status, 403);
  assert.equal((await post(new Request('https://college.example/api/enquiry'))).status, 405);
});

test('production origin is checked independently of internal proxy URL', async () => {
  const [, server] = await modules;
  const post = server.createEnquiryEndpoint({ env: { ...env, ENQUIRY_ALLOWED_ORIGIN: 'https://ndrkfgc.edu.in' }, fetchImpl: async () => Response.json(saved) });
  const wrong = request(submission()); assert.equal((await post(wrong)).status, 403);
  const valid = request(submission()); valid.headers.set('origin', 'https://ndrkfgc.edu.in');
  assert.equal((await post(valid)).status, 200);
});

test('endpoint maps rate limits/status and accepts maximum Unicode', async () => {
  const [, server] = await modules;
  const post = result => server.createEnquiryEndpoint({ env, fetchImpl: async () => Response.json(result) });
  assert.equal((await post({ ...saved, ok: false, code: 'RATE_LIMIT' })(request(submission()))).status, 429);
  assert.equal((await post({ ...saved, ok: false, code: 'HEADERS' })(request(submission()))).status, 503);
  const status = await post({ ...saved, ok: false, code: 'NOT_FOUND' })(request({ action: 'status', receipt: submission().receipt }));
  assert.deepEqual(await status.json(), { ok: false, code: 'NOT_FOUND' });
  assert.equal((await post(saved)(request(submission({ message: '\u0905'.repeat(3000) })))).status, 200);
});

test('receipt storage reuses same data and distinguishes changed purpose/message', async () => {
  const [shared] = await modules;
  const map = new Map(); const storage = { getItem: key => map.get(key), setItem: (key, value) => map.set(key, value) };
  const receipt = await shared.getEnquiryReceipt(fields, storage);
  assert.ok(shared.RECEIPT_PATTERN.test(receipt)); assert.equal(receipt.split(':')[1], hash(fields));
  assert.equal(await shared.getEnquiryReceipt(fields, storage), receipt);
  assert.notEqual(await shared.getEnquiryReceipt({ ...fields, purpose: 'apply' }, storage), receipt);
  assert.notEqual(await shared.getEnquiryReceipt({ ...fields, message: 'Changed' }, storage), receipt);
  assert.ok(shared.RECEIPT_PATTERN.test(await shared.getEnquiryReceipt(fields, { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } })));
  assert(![...map.values()].some(value => value.includes(fields.email)));
});

test('browser recovers lost acknowledgement without duplicate rows end-to-end', async () => {
  const [shared, server] = await modules;
  const script = scriptHarness(), actions = [];
  const endpoint = server.createEnquiryEndpoint({ env, fetchImpl: async (_, options) => Response.json(script.send(JSON.parse(options.body))) });
  const browserFetch = async (_, options) => { const data = JSON.parse(options.body); actions.push(data.action); return endpoint(request(data)); };
  const data = submission(); script.loseNextAcknowledgement();
  assert.deepEqual(await shared.submitEnquiry(fields, data.receipt, browserFetch), { ok: true, code: 'SAVED' });
  assert.deepEqual(actions, ['submit', 'status']); assert.equal(script.rows.length, 2);
  assert.equal((await shared.submitEnquiry(fields, data.receipt, browserFetch)).ok, true);
  assert.equal(script.rows.length, 2);
});

test('browser never claims success on timeout or unconfirmed status', async () => {
  const [shared] = await modules;
  for (const fakeFetch of [async () => { throw Error('timeout'); }, async () => new Response('<html>Offline</html>'), async () => Response.json({ ok: false, code: 'NOT_FOUND' })]) {
    assert.equal((await shared.submitEnquiry(fields, submission().receipt, fakeFetch)).ok, false);
  }
});

test('hung upstream and browser requests terminate at a bounded deadline', async () => {
  const [shared, server] = await modules;
  const never = () => new Promise(() => {});
  const response = await server.createEnquiryEndpoint({ env, fetchImpl: never, timeoutMs: 10 })(request(submission()));
  assert.equal(response.status, 502);
  assert.equal((await shared.submitEnquiry(fields, submission().receipt, never, 10)).ok, false);
});

test('real HTTP Node adapter handles JSON, oversized bodies and method errors', async () => {
  const [, serverModule] = await modules;
  const server = createServer(serverModule.createNodeHandler({ env, fetchImpl: async () => Response.json(saved) }));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  try {
    const response = await fetch(`${origin}/api/enquiry`, { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: JSON.stringify(submission()) });
    assert.equal(response.status, 200); assert.deepEqual(await response.json(), { ok: true, code: 'SAVED' });
    assert.equal((await fetch(`${origin}/api/enquiry`)).status, 405);
    assert.equal((await fetch(`${origin}/api/enquiry`, { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: 'x'.repeat(25000) })).status, 413);
  } finally { await new Promise(resolve => server.close(resolve)); }
});

test('Vite dev and preview serve API JSON instead of the HTML fallback', async () => {
  const { createServer: createViteServer, preview } = await import('vite');
  const { enquiryApi } = await import('../server/vite-plugin.mjs');
  const dev = await createViteServer({ configFile: false, plugins: [enquiryApi()], server: { host: '127.0.0.1', port: 0 }, logLevel: 'silent' });
  await dev.listen();
  const previewServer = await preview({ configFile: false, plugins: [enquiryApi()], build: { outDir: '.' }, preview: { host: '127.0.0.1', port: 0 }, logLevel: 'silent' });
  try {
    for (const httpServer of [dev.httpServer, previewServer.httpServer]) {
      const origin = `http://127.0.0.1:${httpServer.address().port}`;
      const result = await fetch(`${origin}/api/enquiry`);
      assert.equal(result.status, 405); assert.equal((await result.json()).code, 'METHOD');
      const invalid = await fetch(`${origin}/api/enquiry`, { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: '{}' });
      assert.equal(invalid.status, 400); assert.equal((await invalid.json()).code, 'VALIDATION');
    }
  } finally { await dev.close(); await new Promise(resolve => previewServer.httpServer.close(resolve)); }
});
