import { randomUUID, createHash } from 'node:crypto';
import { createEnquiryEndpoint } from '../server/enquiry.mjs';

// Read-only live probe. No action:submit request is made and no row is inserted.
const receipt = `${randomUUID()}:${createHash('sha256').update(randomUUID()).digest('base64url')}`;
const origin = process.env.ENQUIRY_ALLOWED_ORIGIN || 'http://localhost';
const result = await createEnquiryEndpoint()(new Request(`${origin}/api/enquiry`, {
    method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'status', receipt }),
}));
const data = await result.json();
if (result.ok && data.code === 'NOT_FOUND') {
    console.log('PASS: live Apps Script, secret, NDRK FGC tab, headings and protocol verified. No row written.');
} else {
    console.error(`Live enquiry check failed (${data.code}). Check local configuration and the Apps Script deployment. No submit request was made.`);
    process.exitCode = 1;
}
