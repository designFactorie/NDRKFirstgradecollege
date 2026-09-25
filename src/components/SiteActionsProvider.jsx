import { useRef, useState } from 'react';
import { Info, Send } from 'lucide-react';
import Modal from './Modal';
import { SiteActionsContext, resourceMessages } from './siteActions';
import { submitEnquiry } from '../services/enquiries';
import { normalizePhone, validDateOfBirth, validScore, ADMISSION_MODES } from '../lib/enquiry.mjs';

const emptyForm = { name: '', email: '', phone: '', dateOfBirth: '', previousInstitution: '', score: '', program: '', admissionMode: '', message: '' };

export default function SiteActionsProvider({ children }) {
    const [dialog, setDialog] = useState(null);
    const [values, setValues] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [feedback, setFeedback] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [purpose, setPurpose] = useState('apply');
    const inFlight = useRef(false);
    const formRef = useRef(null);
    const submitRef = useRef(null);

    function openEnquiry(initial = {}) {
        const { purpose: nextPurpose = 'apply', ...fields } = initial;
        setPurpose(nextPurpose);
        setValues((current) => ({ ...current, ...fields }));
        setErrors({});
        setFeedback('');
        setDialog({ type: 'enquiry' });
    }

    function showResource(key) {
        const [title, message] = resourceMessages[key];
        setDialog({ type: 'resource', title, message });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (inFlight.current) return;
        const data = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()]));
        const nextErrors = {};
        if (!data.name) nextErrors.name = 'Please enter your name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = 'Please enter a valid email address.';
        if (!normalizePhone(data.phone)) nextErrors.phone = 'Enter a 10-digit Indian phone number, optionally starting with +91.';
        if (!['B.Com', 'M.Com', 'BCA', 'BBA'].includes(data.program)) nextErrors.program = 'Please select a program.';
        if (!validDateOfBirth(data.dateOfBirth)) nextErrors.dateOfBirth = 'Enter a valid date of birth that is not in the future.';
        if (!data.previousInstitution || data.previousInstitution.length > 200) nextErrors.previousInstitution = 'Enter your previous school or college (up to 200 characters).';
        if (!validScore(data.score)) nextErrors.score = 'Enter a percentage from 0 to 100 (e.g. 85%) or CGPA from 0 to 10 (e.g. 8.5 CGPA).';
        if (!ADMISSION_MODES.includes(data.admissionMode)) nextErrors.admissionMode = 'Please select a mode of admission.';
        setErrors(nextErrors);
        setFeedback('');
        if (Object.keys(nextErrors).length) {
            formRef.current.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
            return;
        }
        inFlight.current = true;
        setSubmitting(true);
        try {
            const result = await submitEnquiry({ ...data, purpose });
            if (result.ok && result.code === 'SAVED') {
                setFeedback('Thank you. Your enquiry has been received.');
                setValues(emptyForm);
            } else {
                const messages = {
                    RATE_LIMIT: 'Please wait one minute before sending another enquiry from this phone number.',
                    VALIDATION: 'Please check your details and try again.',
                    INVALID_RECEIPT: 'Please check your details and try again.',
                    CONFIG: 'Online enquiries are temporarily unavailable. Your details are still here; please try again later.',
                    AUTH: 'Online enquiries are temporarily unavailable. Please try again later.',
                    INSTITUTION: 'Online enquiries are temporarily unavailable. Please try again later.',
                    SHEET: 'Online enquiries are temporarily unavailable. Please try again later.',
                    HEADERS: 'Online enquiries are temporarily unavailable. Please try again later.',
                };
                setFeedback(messages[result.code] || 'We could not confirm whether your enquiry was saved. Your details are still here. Retry with the same details so we can check without creating a duplicate.');
            }
        } catch {
            setFeedback('We could not confirm your enquiry. Your entries are still here. Please retry with the same details.');
        } finally {
            inFlight.current = false;
            setSubmitting(false);
            // Disabling a focused submit button can move focus to the document body.
            requestAnimationFrame(() => submitRef.current?.focus({ preventScroll: true }));
        }
    }

    const fieldProps = (name) => ({
        id: `enquiry-${name}`, name, value: values[name],
        onChange: (event) => {
            setValues((current) => ({ ...current, [name]: event.target.value }));
            setErrors((current) => ({ ...current, [name]: undefined }));
            setFeedback('');
        },
        'aria-invalid': Boolean(errors[name]),
        'aria-describedby': errors[name] ? `error-${name}` : undefined,
    });
    const error = (name) => errors[name] && <span className="field-error" id={`error-${name}`}>{errors[name]}</span>;

    return (
        <SiteActionsContext.Provider value={{ openEnquiry, showResource }}>
            {children}
            <Modal open={dialog?.type === 'enquiry'} onClose={() => { if (!submitting) setDialog(null); }}
                className="enquiry-dialog" titleId="enquiry-title" descriptionId="enquiry-description" initialFocus="#enquiry-name">
                <div className="enquiry-heading">
                    <p className="dialog-eyebrow">NDRK FIRST GRADE COLLEGE</p>
                    <h2 id="enquiry-title">Admission enquiry</h2>
                    <p id="enquiry-description">Share your details. Our admissions team will get in touch.</p>
                </div>
                <form ref={formRef} className="enquiry-form" onSubmit={handleSubmit} noValidate aria-busy={submitting}>
                    <p className="required-note">* Required fields</p>
                    <fieldset className="enquiry-grid" disabled={submitting}>
                        <legend className="enquiry-section-title">1. Personal Information</legend>
                        <label htmlFor="enquiry-name">Full Name *<input {...fieldProps('name')} autoComplete="name" maxLength={120} required placeholder="As per 10th marks card" />{error('name')}</label>
                        <label htmlFor="enquiry-email">Email *<input {...fieldProps('email')} type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" />{error('email')}</label>
                        <label htmlFor="enquiry-phone">Phone number *<input {...fieldProps('phone')} type="tel" autoComplete="tel" maxLength={25} required placeholder="Your phone number" />{error('phone')}</label>
                        <label htmlFor="enquiry-dateOfBirth">Date of Birth *<input {...fieldProps('dateOfBirth')} type="date" autoComplete="bday" min="1900-01-01" max={new Date().toISOString().slice(0, 10)} required />{error('dateOfBirth')}</label>
                    </fieldset>
                    <fieldset className="enquiry-grid" disabled={submitting}>
                        <legend className="enquiry-section-title">2. Academic History</legend>
                        <label htmlFor="enquiry-previousInstitution">Previous Institution *<input {...fieldProps('previousInstitution')} maxLength={200} required placeholder="College/School Name" />{error('previousInstitution')}</label>
                        <label htmlFor="enquiry-score">Percentage / CGPA *<input {...fieldProps('score')} maxLength={30} required placeholder="e.g. 85% or 8.5 CGPA" />{error('score')}</label>
                    </fieldset>
                    <fieldset className="enquiry-grid" disabled={submitting}>
                        <legend className="enquiry-section-title">3. Course Selection</legend>
                        <label htmlFor="enquiry-program">Program *<select {...fieldProps('program')} required><option value="">Select a program</option><option>B.Com</option><option>M.Com</option><option>BCA</option><option>BBA</option></select>{error('program')}</label>
                        <label htmlFor="enquiry-admissionMode">Mode of Admission *<select {...fieldProps('admissionMode')} required><option value="">Select admission mode</option>{ADMISSION_MODES.map(mode => <option key={mode}>{mode}</option>)}</select>{error('admissionMode')}</label>
                        <label htmlFor="enquiry-message" className="enquiry-message">Message <span className="optional">(optional)</span><textarea {...fieldProps('message')} rows={2} maxLength={3000} placeholder="What would you like to know?" /></label>
                    </fieldset>
                    {feedback && <p role="status" className="enquiry-feedback">{feedback}</p>}
                    <div className="enquiry-actions">
                    <p className="enquiry-privacy">Your details are used to respond to your enquiry.</p>
                    <button ref={submitRef} className="enquiry-submit" type="submit" disabled={submitting}>{submitting ? 'Submitting…' : 'Submit Enquiry'}<Send size={18} aria-hidden="true" /></button>
                    </div>
                </form>
            </Modal>
            <Modal open={dialog?.type === 'resource'} onClose={() => setDialog(null)} titleId="resource-title" descriptionId="resource-description">
                <div className="resource-message">
                    <span className="enquiry-emblem"><Info size={25} /></span>
                    <p className="dialog-eyebrow">NDRK FIRST GRADE COLLEGE</p>
                    <h2 id="resource-title">{dialog?.title}</h2>
                    <p id="resource-description">{dialog?.message}</p>
                    <button className="enquiry-submit" onClick={() => setDialog(null)}>Got it</button>
                </div>
            </Modal>
        </SiteActionsContext.Provider>
    );
}
