# NDRK FGC enquiry setup

## 1. Spreadsheet

Use spreadsheet `12j_Rs6qbmOdJ_YgvaNf9gChZbgCbBUzm-mG-0EtNHTM` and tab **NDRK FGC**.
Row 1 must contain these exact headings in A:K (split on `|`):

```text
Date & Time|Institution|Name|Email Address|Phone Number|Program|Message|Enquiry Type|Submission Receipt|Status|Notes
```

Column I is the submission receipt. It may be hidden, but must not be removed or
reordered. Status and Notes are staff fields and are left blank by the script.
Do not modify another school's tab or Apps Script project.

## 2. Apps Script

Copy the entire `docs/enquiry-google-apps-script.gs` into the separate **NDRK FGC**
Apps Script project's `Code.gs`. This project must run under an account with edit
access to the spreadsheet. The script supports B.Com, M.Com, BCA and BBA.

Set `ENQUIRY_SCRIPT_SECRET` in that project's Script properties to a unique random
secret. Keep it private; never place it in frontend code or a VITE_ variable.
Deploy as a Web app, executing as yourself with access set to Anyone if your Google
Workspace account permits it. Use the deployed `/exec` URL, not `/dev`.

If you already deployed this new FGC project, update its existing deployment via
Manage deployments > Edit > New version, then deploy. Keep the same URL.
The separate `.test.cjs` file is for Node.js; do not paste it into Apps Script.

## 3. Local configuration

An empty `.env.local` template was created if the file did not already exist.
Fill these values locally (do not paste the secret into chat):

```dotenv
ENQUIRY_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
ENQUIRY_SCRIPT_SECRET=YOUR_PRIVATE_SECRET
```

The secret must exactly match Apps Script's property. `.env.local` is Git-ignored.
Leave ENQUIRY_ALLOWED_ORIGIN unset for localhost testing. Restart the dev server
after changing this file:

```powershell
npm.cmd run dev
```

Vite serves `/api/enquiry` in development and preview. It returns a JSON error when
configuration is missing; it never pretends to save an enquiry.

## 4. Checks

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run check:enquiry
```

The test suite uses a simulated Google Sheets service, not your live spreadsheet.
`check:enquiry` makes an authenticated **status-only** request with a fresh random
receipt. It verifies live configuration, tab headers and protocol without adding a
row. A successful NOT_FOUND response is expected for this new receipt.

Then submit one clearly labelled test enquiry through the website. Confirm the row
appears in NDRK FGC, with correct institution, program and enquiry type. Test a campus
visit separately after the one-minute phone cooldown. Staff may remove the labelled
test rows once verification is complete.

## 5. Production

The form requires a server-side `/api/enquiry` endpoint. A static dist upload or
GitHub Pages alone cannot run that endpoint or keep the script secret private.
No hosting provider, DNS setting or live website was changed by this implementation.

A Node 22.12+ production server is included:

```powershell
npm.cmd run build
npm.cmd start
```

It serves the built website and API on port 3000 by default. Set PORT as required;
set HOST=0.0.0.0 if required by your hosting platform. Use your host's HTTPS reverse
proxy. In the production server environment set:

```dotenv
ENQUIRY_SCRIPT_URL=YOUR_EXEC_URL
ENQUIRY_SCRIPT_SECRET=YOUR_PRIVATE_SECRET
ENQUIRY_ALLOWED_ORIGIN=https://ndrkfgc.edu.in
```

Use hosting environment variables rather than uploading a secret file to a public
web root. If using a serverless or PHP-only host, a compatible API deployment is still
needed; the final deployment depends on the hosting provider. `npm run deploy` still
publishes static files only and does not deploy this backend.

## Behaviour and testing limits

- Existing form fields remain: name, email, phone, program and optional message.
- +91 phone numbers normalize to 10 digits. Messages support up to 3,000 characters.
- Apply Now sends Admission; campus-tour/visit buttons send Campus Visit.
- A SHA-256 fingerprint and UUID receipt identify a submission. Receipts (not raw
  form fields or credentials) are kept in sessionStorage, with an in-memory fallback.
- Repeating unchanged data reuses its receipt. A script lock prevents duplicate
  writes. Distinct enquiries from the same phone have a 60-second cooldown.
- If acknowledgement is lost, the client checks the same receipt's status. Unknown
  results retain the fields and invite retry; only confirmed SAVED clears the form.
- The script validates the institution and exact column order and writes user text
  as literal values. It only appends to the NDRK FGC tab.
- A receipt is an idempotency token, not user authentication. Origin checks protect
  browser requests; they are not bot protection. Public launch may require additional
  host-level rate limiting or CAPTCHA depending on traffic.

The live URL and secret were not supplied during implementation. Automated test
success does not prove a row was saved in the real Google Sheet.
