# SEO launch and verification

## Implemented in the project

- Ten public pages prerender their existing React content into HTML during the build.
- Each page has a unique title, description, canonical, Open Graph and Twitter metadata.
- Metadata updates on client-side navigation. Unknown pages have noindex metadata.
- CollegeOrUniversity, WebSite and WebPage JSON-LD uses the identity/location already visible on the website. No unverified phone, street address, rating or accreditation is added.
- The build generates sitemap.xml and robots.txt from the same route metadata.
- The homepage hero has high image fetch priority. Existing below-fold lazy loading remains.
- The Node server serves real route HTML, sitemap/robots MIME types and real 404 responses, and normalizes known trailing-slash/index URLs.
- An Apache .htaccess is included for the public host's direct page URLs and preferred non-www domain. It must be merged with existing host/API configuration.

## 1. Validate locally

```powershell
npm test
npm run lint
npm run build
npm run check:seo
npm start
```

Open the port printed by npm start. Open /admissions and /courses directly, then refresh. View Page Source: the title, description, canonical and main page content should already be present without JavaScript. Test Apply Now, navigation and enquiry submission separately. The SEO checks never write to Google Sheets.

## 2. Deploy the complete build

Confirm the hosting provider before changing its configuration. Upload all contents of dist, including every page directory, sitemap.xml, robots.txt, assets and the hidden .htaccess file on Apache. Uploading only index.html and assets leaves direct pages returning 404.

For Apache/cPanel, back up and merge the supplied .htaccess with any existing rules. mod_rewrite and the required AllowOverride permissions must be available. Preserve /api/enquiry routing and the host's HTTPS/proxy configuration. The file does not implement the enquiry backend. If the host rejects an Options directive, have the hosting administrator apply the equivalent setting at virtual-host level. Test on staging first; these Apache rules have not been executed against your live host.

For the included Node server, deploy the updated source and dist, preserve server-side environment variables, and restart npm start behind the existing HTTPS reverse proxy. The proxy should permanently redirect HTTP to HTTPS; the Node server does not infer HTTPS from untrusted forwarded headers. Its www redirect applies when the original host header reaches Node. Otherwise configure that redirect at the proxy.

Other hosting platforms need equivalent direct-route, canonical redirect and 404 settings. Do not use a blanket 200 homepage fallback for unknown paths.

## 3. Verify the public deployment

Check all ten sitemap URLs return 200 with page-specific HTML. Check:

- https://ndrkfgc.edu.in/robots.txt returns text, not HTML.
- https://ndrkfgc.edu.in/sitemap.xml returns XML containing only canonical public URLs.
- https://www.ndrkfgc.edu.in/courses redirects to https://ndrkfgc.edu.in/courses.
- HTTP redirects to HTTPS.
- /courses/ and /courses/index.html redirect to /courses on the supplied Node/Apache setup.
- A nonexistent page returns HTTP 404 and noindex, not a 200 homepage.
- Apply Now still submits through the private backend.

Local success does not prove the current public deployment has been updated.

## 4. Search Console (requires owner access)

Create or use the ndrkfgc.edu.in Domain property in Google Search Console. Add its exact verification TXT record to DNS without removing existing TXT records. Submit sitemap.xml. Inspect the homepage, Courses and Admissions URLs, run Test Live URL, check rendered content and canonical selection, and request indexing. Monitor Page indexing, Performance and Core Web Vitals. Indexing and rankings are not guaranteed.

## 5. Verify content and local identity

Provide the official full street address, admissions phone/email, Google Business Profile link, and approved course/fee/eligibility documents before expanding contact details or creating dedicated course pages. The current general course descriptions are not sufficient evidence for current program fees, admissions deadlines or accreditation claims. Verify statistics such as financial assistance and student/faculty ratios before promoting them in SEO copy. Existing content is preserved pending confirmation.

Claim/verify the First Grade College's correct Business Profile (not NDRK PU), keep contact information consistent, and add genuine campus images. Replace unavailable brochures with supplied official documents. No Business Profile, DNS or external account changes have been made by this implementation.

## 6. Measure performance and conversions after deployment

Use PageSpeed Insights on the homepage, Courses and Admissions. Check real-user Core Web Vitals where data exists: LCP <=2.5s, INP <=200ms, CLS <=0.1 at the 75th percentile. Prioritize large external images, font requests and main-thread work based on the report; no live performance score is asserted here.

If analytics is approved, use an owner-provided property ID and track only successful enquiry confirmations as conversions. Never send names, email addresses, phone numbers, dates of birth, messages or submission receipts to analytics. Compare organic clicks and confirmed enquiries over time.

References: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics and https://developers.google.com/search/docs/monitor-debug/search-console-start
