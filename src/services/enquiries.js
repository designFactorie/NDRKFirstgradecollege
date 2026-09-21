import { getEnquiryReceipt, normalizeEnquiry, submitEnquiry as sendEnquiry } from '../lib/enquiry.mjs';

export async function submitEnquiry(enquiry) {
    const data = normalizeEnquiry(enquiry);
    if (!data) return { ok: false, code: 'VALIDATION' };
    const receipt = await getEnquiryReceipt(data);
    return sendEnquiry(data, receipt);
}
