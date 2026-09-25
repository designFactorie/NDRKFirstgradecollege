const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('SEO routes match application routes and have unique metadata', async () => {
 const { pages, pageSeo, seoHead } = await import('../src/seo.mjs');
 const routes = [...fs.readFileSync('src/App.jsx', 'utf8').matchAll(/<Route\s+path="([^"]+)"/g)].map(m => m[1]).filter(p => p !== '*');
 assert.deepEqual(Object.keys(pages).sort(), routes.sort());
 assert.equal(new Set(Object.values(pages).map(p => p[0])).size, routes.length);
 assert.equal(new Set(Object.values(pages).map(p => p[1])).size, routes.length);
 for (const path of routes) {
  const seo = pageSeo(path);
  assert.equal(seo.canonical, 'https://ndrkfgc.edu.in' + path);
  assert.equal(pageSeo(path + '/').canonical, seo.canonical);
  assert.equal((seoHead(path).match(/rel="canonical"/g) || []).length, 1);
 }
 assert.equal(pageSeo('/missing').robots, 'noindex,follow');
 assert.equal(pageSeo('/missing').canonical, null);
});

test('schema matches visible college identity and does not invent ratings or contact details', async () => {
 const { structuredData } = await import('../src/seo.mjs');
 const college = structuredData('/')['@graph'][0];
 assert.equal(college['@type'], 'CollegeOrUniversity');
 assert.equal(college.address.addressLocality, 'Hassan');
 assert.equal(college.aggregateRating, undefined);
 assert.equal(college.telephone, undefined);
 assert.equal(structuredData('/missing'), null);
});
