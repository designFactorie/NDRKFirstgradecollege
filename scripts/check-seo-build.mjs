import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pages, pageSeo, escapeHtml } from '../src/seo.mjs';

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
for (const path of Object.keys(pages)) {
 const html = await readFile(`dist${path === '/' ? '' : path}/index.html`, 'utf8');
 const seo = pageSeo(path);
 assert.ok(html.includes(`<title>${escapeHtml(seo.title)}</title>`), path + ' title');
 assert.ok(html.includes(`href="${seo.canonical}"`), path + ' canonical');
 assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, path + ' heading');
 assert.ok(html.includes('<main'), path + ' prerendered main');
 assert.ok(!html.includes('<div id="root"></div>'), path + ' empty root');
 assert.ok(sitemap.includes(`<loc>${seo.canonical}</loc>`), path + ' sitemap');
 JSON.parse(html.match(/<script type="application\/ld\+json" data-seo>([\s\S]*?)<\/script>/)[1]);
}
const notFound = await readFile('dist/404.html', 'utf8');
assert.ok(notFound.includes('noindex,follow'));
assert.ok(!notFound.includes('rel="canonical"'));
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes('https://ndrkfgc.edu.in/sitemap.xml'));
console.log(`PASS: ${Object.keys(pages).length} prerendered pages, metadata, schema, sitemap, robots and noindex 404.`);
