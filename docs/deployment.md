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

The build creates an `index.html` in each known route directory, along with root
`index.html` and `404.html`. This supports direct links and refreshes on static hosts
that serve directory indexes, including GitHub Pages. Some hosts redirect a route
to a trailing slash; this is a valid clean URL, and the app handles it.

- **Apache/cPanel:** publish to the domain's document root and enable directory
  indexes via `DirectoryIndex index.html` (not directory listings). Set
  `ErrorDocument 404 /404.html` if a branded error page is desired. Merge settings
  with the existing configuration rather than overwriting it.
- **Nginx:** serve `dist`, with `index index.html;` and
  `try_files $uri $uri/ =404;`. Use `error_page 404 /404.html;` for the error page.
- **Netlify/Vercel:** set the build command to `npm run build`, output directory to
  `dist`, and attach the custom domain in the hosting dashboard. Directory indexes
  provide the known routes; configure the host's custom 404 handling if needed.
- **GitHub Pages:** the existing `npm run deploy` publishes `dist` to `gh-pages`.
  Use this only if GitHub Pages is the intended host. `public/CNAME` carries the
  requested domain into the build. Domain ownership, DNS, Pages settings and HTTPS
  must still be configured and verified in GitHub; this repository does not do that.

Before switching the live domain, verify `/`, direct `/courses` and `/courses/`,
refreshing `/admissions`, all local images, and an unknown route on the actual host.
For non-directory hosts, configure their SPA fallback to `/index.html` instead.

Legacy `/#/courses` links are converted to `/courses` when the app loads. Old
`/NDRKFirstgradecollege/...` bookmarks also migrate if the host serves the app for
that old path; otherwise add a host-level redirect for that prefix.

The hosting provider and live DNS have not been confirmed. Updating source files
does not change the existing live website.

## Enquiry API

Enquiry saving now requires the server endpoint described in [enquiry-integration.md](enquiry-integration.md). Static route pages still support navigation, but static hosting alone does not run the API. Deploy the included Node server or a compatible private backend before enabling live enquiries.
