export const INSTITUTION = 'NDRK FGC';
export const PROGRAMS = ['B.Com', 'M.Com', 'BCA', 'BBA'];
export const RECEIPT_PATTERN = /^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}:[A-Za-z0-9_-]{43}$/;
export const ADMISSION_MODES = ['Merit Based', 'Management Quota'];
export const PROTOCOL = 2;
const FIELDS = ['name', 'phone', 'email', 'dateOfBirth', 'previousInstitution', 'score', 'program', 'admissionMode', 'message', 'purpose'];
const memoryReceipts = new Map();

export function normalizePhone(value) {
    if (typeof value !== 'string' || !/^[+\d\s()-]+$/.test(value)) return null;
    let phone = value.replace(/[\s()-]/g, '');
    if (phone.startsWith('+91')) phone = phone.slice(3);
    return /^\d{10}$/.test(phone) ? phone : null;
}

export function validDateOfBirth(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(value + 'T00:00:00Z');
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value &&
        value >= '1900-01-01' && value <= new Date().toISOString().slice(0, 10);
}

export function validScore(value) {
    const match = /^(\d{1,3}(?:\.\d{1,2})?)\s*(%|CGPA)?$/i.exec(value);
    return Boolean(match) && Number(match[1]) <= (match[2]?.toUpperCase() === 'CGPA' ? 10 : 100);
}

export function normalizeEnquiry(input) {
    if (!input || FIELDS.some((key) => typeof input[key] !== 'string')) return null;
    if (input.name.length > 120 || input.email.length > 254 || input.message.length > 3000 || input.previousInstitution.length > 200 || input.score.length > 30) return null;
    const data = Object.fromEntries(FIELDS.map((key) => [key, input[key].trim()]));
    data.phone = normalizePhone(input.phone);
    if (!data.name || !data.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
        !validDateOfBirth(data.dateOfBirth) || !data.previousInstitution || !validScore(data.score) ||
        !ADMISSION_MODES.includes(data.admissionMode) || !PROGRAMS.includes(data.program) || !['apply', 'visit'].includes(data.purpose)) return null;
    return data;
}

export const enquiryFingerprint = (data) => JSON.stringify(FIELDS.map((key) => data[key]));

export async function getEnquiryReceipt(data, storage) {
    const bytes = new TextEncoder().encode(enquiryFingerprint(data));
    const digest = new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', bytes));
    const hash = btoa(String.fromCharCode(...digest)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const key = `ndrk-fgc:enquiry:${hash}`;
    try { storage ??= globalThis.sessionStorage; } catch { /* Restricted storage: keep retries in memory. */ }
    let previous;
    try { previous = storage?.getItem(key); } catch { /* Storage may be disabled. */ }
    previous ||= memoryReceipts.get(key);
    if (typeof previous === 'string' && RECEIPT_PATTERN.test(previous) && previous.endsWith(':' + hash)) return previous;
    const receipt = `${globalThis.crypto.randomUUID()}:${hash}`;
    memoryReceipts.set(key, receipt);
    try { storage?.setItem(key, receipt); } catch { /* Memory fallback above still prevents repeat clicks. */ }
    return receipt;
}

async function request(body, fetchImpl, timeoutMs) {
    const controller = new AbortController();
    let timer;
    try {
        return await Promise.race([
            (async () => {
                const response = await fetchImpl('/api/enquiry', {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body), signal: controller.signal, credentials: 'same-origin',
                });
                const data = await response.json();
                if (response.ok && data?.ok === true && data.code === 'SAVED') return { ok: true, code: 'SAVED' };
                const codes = ['VALIDATION', 'INVALID_RECEIPT', 'RATE_LIMIT', 'CONFIG', 'AUTH', 'INSTITUTION', 'SHEET', 'HEADERS', 'NOT_FOUND'];
                if (data?.ok === false && codes.includes(data.code)) return { ok: false, code: data.code };
                return { ok: false, code: 'UNKNOWN' };
            })(),
            new Promise((_, reject) => { timer = setTimeout(() => { controller.abort(); reject(new Error('timeout')); }, timeoutMs); }),
        ]);
    } catch { return { ok: false, code: 'UNKNOWN' }; }
    finally { clearTimeout(timer); }
}

export async function submitEnquiry(input, receipt, fetchImpl = globalThis.fetch, timeoutMs = 20000) {
    const data = normalizeEnquiry(input);
    if (!data || !RECEIPT_PATTERN.test(receipt)) return { ok: false, code: 'VALIDATION' };
    const result = await request({ ...data, receipt, action: 'submit' }, fetchImpl, timeoutMs);
    if (result.code !== 'UNKNOWN') return result;
    // A timeout may follow a successful write. Check the SAME receipt; never create a new row automatically.
    const status = await request({ action: 'status', receipt }, fetchImpl, timeoutMs);
    return status.ok ? status : { ok: false, code: 'UNKNOWN' };
}
