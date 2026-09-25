import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';
import { pages, seoHead, SITE_URL } from '../src/seo.mjs';

const output = resolve('dist');
const template = await readFile(resolve(output, 'index.html'), 'utf8');
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
 const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
 for (const path of [...Object.keys(pages), '/404']) {
  const content = render(path);
  const html = template.replace(/<title>[\s\S]*?<\/title>/, () => seoHead(path))
   .replace('<div id="root"></div>', () => `<div id="root">${content}</div>`);
  const file = path === '/404' ? resolve(output, '404.html') : resolve(output, '.' + path, 'index.html');
  await mkdir(resolve(file, '..'), { recursive: true });
  await writeFile(file, html);
 }
 await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map(path => `<url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}\n</urlset>\n`);
 await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
 console.log(`Prerendered ${Object.keys(pages).length} pages, a noindex 404, sitemap.xml and robots.txt.`);
} finally { await vite.close(); }
