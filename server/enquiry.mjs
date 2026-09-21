import { createHash } from 'node:crypto';
import { INSTITUTION, RECEIPT_PATTERN, normalizeEnquiry, enquiryFingerprint } from '../src/lib/enquiry.mjs';

const MAX_BYTES = 24000;
const reply = (code, status) => Response.json({ ok: code === 'SAVED', code }, {
    status, headers: { 'Cache-Control': 'no-store', ...(code === 'RATE_LIMIT' ? { 'Retry-After': '60' } : {}) },
});

export function createEnquiryEndpoint({ env = process.env, fetchImpl = globalThis.fetch, timeoutMs = 15000 } = {}) {
    return async function post(request) {
        if (request.method !== 'POST') return reply('METHOD', 405);
        const origin = request.headers.get('origin');
        const allowedOrigin = env.ENQUIRY_ALLOWED_ORIGIN || new URL(request.url).origin;
        if (!origin || origin !== allowedOrigin) return reply('ORIGIN', 403);
        if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return reply('VALIDATION', 400);
        if (Number(request.headers.get('content-length')) > MAX_BYTES) return reply('SIZE', 413);
        let data;
        try {
            const text = await request.text();
            if (Buffer.byteLength(text) > MAX_BYTES) return reply('SIZE', 413);
            data = JSON.parse(text);
        } catch { return reply('VALIDATION', 400); }
        if (!data || typeof data !== 'object' || Array.isArray(data) ||
            !['submit', 'status'].includes(data.action) || typeof data.receipt !== 'string' || !RECEIPT_PATTERN.test(data.receipt)) return reply('VALIDATION', 400);
        let payload = { action: data.action, receipt: data.receipt };
        if (data.action === 'submit') {
            const normalized = normalizeEnquiry(data);
            if (!normalized) return reply('VALIDATION', 400);
            const hash = createHash('sha256').update(enquiryFingerprint(normalized)).digest('base64url');
            if (data.receipt.split(':')[1] !== hash) return reply('INVALID_RECEIPT', 400);
            payload = { ...payload, ...normalized };
        }
        // Never trust institution or credentials supplied by a browser.
        const url = env.ENQUIRY_SCRIPT_URL;
        if (typeof url !== 'string' || !/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url) ||
            typeof env.ENQUIRY_SCRIPT_SECRET !== 'string' || !env.ENQUIRY_SCRIPT_SECRET.trim()) return reply('CONFIG', 503);
        const controller = new AbortController();
        let timer;
        try {
            const upstream = await Promise.race([
                (async () => {
                    const response = await fetchImpl(url, {
                        method: 'POST', redirect: 'follow', signal: controller.signal,
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ...payload, institution: INSTITUTION, secret: env.ENQUIRY_SCRIPT_SECRET }),
                    });
                    if (!response.ok) throw new Error('upstream');
                    const result = await response.json();
                    if (result?.institution !== INSTITUTION || result.protocol !== 1 ||
                        typeof result.ok !== 'boolean' || result.ok !== (result.code === 'SAVED')) throw new Error('acknowledgement');
                    return result;
                })(),
                new Promise((_, reject) => { timer = setTimeout(() => { controller.abort(); reject(new Error('timeout')); }, timeoutMs); }),
            ]);
            const status = { SAVED: 200, NOT_FOUND: 200, RATE_LIMIT: 429, VALIDATION: 400, INVALID_RECEIPT: 400,
                AUTH: 503, INSTITUTION: 503, SHEET: 503, HEADERS: 503 }[upstream.code];
            return status ? reply(upstream.code, status) : reply('UNKNOWN', 502);
        } catch { return reply('UNKNOWN', 502); }
        finally { clearTimeout(timer); }
    };
}

export function createNodeHandler(options = {}) {
    const endpoint = createEnquiryEndpoint(options);
    return async (req, res) => {
        const send = async (response) => {
            if (res.writableEnded || res.destroyed) return;
            res.writeHead(response.status, Object.fromEntries(response.headers));
            res.end(await response.text());
        };
        if (req.method !== 'POST') { req.resume(); return send(reply('METHOD', 405)); }
        if (Number(req.headers['content-length']) > MAX_BYTES) { req.resume(); return send(reply('SIZE', 413)); }
        let size = 0;
        const chunks = [];
        let oversized = false;
        req.on('data', (chunk) => {
            size += chunk.length;
            if (size > MAX_BYTES) {
                if (!oversized) { oversized = true; chunks.length = 0; void send(reply('SIZE', 413)); }
            } else if (!oversized) chunks.push(chunk);
        });
        req.on('end', async () => {
            if (oversized) return;
            try {
                const origin = `${req.socket.encrypted ? 'https' : 'http'}://${req.headers.host || 'localhost'}`;
                const headers = new Headers();
                for (const [name, value] of Object.entries(req.headers)) if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(',') : value);
                const request = new Request(new URL(req.url, origin), { method: 'POST', headers, body: Buffer.concat(chunks) });
                await send(await endpoint(request));
            } catch { await send(reply('UNKNOWN', 502)); }
        });
        req.on('error', () => { void send(reply('UNKNOWN', 502)); });
    };
}
