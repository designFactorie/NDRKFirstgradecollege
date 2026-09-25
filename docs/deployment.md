# Clean URLs and deployment

The site is configured for `https://ndrkfgc.edu.in/` using BrowserRouter and a Vite
base of `/`. Local development starts at the root URL printed by `npm run dev`.
Page URLs include `/courses`, `/admissions`, and `/about-us`. Section navigation
uses router state, so clicking a section link does not add a hash to the URL.
Opening a section link in a new tab opens the destination page at the top.

## Build and publish

Run `npm ci`, then `npm run build`. Publish the **contents** of `dist` to the domain's
web root, not to a `NDRKFirstgradecollege` subfolder. No live deployment or DNS change
is made by the build command.

The build prerenders real page content into each route's index.html and creates page-specific metadata, sitemap.xml, robots.txt and a noindex 404.html. See [SEO launch and verification](seo-launch.md) for deployment and validation.

- **Apache/cPanel:** upload the full dist contents, including hidden .htaccess. Back up and merge existing host/API rules. The supplied configuration serves slashless page URLs and redirects www to the canonical non-www domain. Preserve hosting HTTPS enforcement and the enquiry backend.
- **Node:** the included server serves prerendered routes, canonical route redirects, crawler files and proper 404 responses. Deploy behind the host's HTTPS proxy.
- **Other static hosts:** deploy every route directory and configure canonical redirects and genuine 404 responses in the hosting dashboard. GitHub Pages cannot run the enquiry API; use a compatible private backend.

Do not rewrite every unknown URL to the homepage with status 200. Verify direct links and refreshes on the actual host after deployment.

Legacy `/#/courses` links are converted to `/courses` when the app loads. Old
`/NDRKFirstgradecollege/...` bookmarks also migrate if the host serves the app for
that old path; otherwise add a host-level redirect for that prefix.

The hosting provider and live DNS have not been confirmed. Updating source files
does not change the existing live website.

## Enquiry API

Enquiry saving now requires the server endpoint described in [enquiry-integration.md](enquiry-integration.md). Static route pages still support navigation, but static hosting alone does not run the API. Deploy the included Node server or a compatible private backend before enabling live enquiries.
