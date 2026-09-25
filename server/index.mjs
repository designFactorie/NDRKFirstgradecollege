import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { pages } from '../src/seo.mjs';
import { createNodeHandler } from './enquiry.mjs';

const root = resolve('dist');
const enquiry = createNodeHandler();
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
    '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };
const server = createServer(async (req, res) => {
    const pathname = req.url?.split('?')[0];
    if (pathname === '/api/enquiry') return enquiry(req, res);
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); return res.end(); }
    const normalized = pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/';
    if (req.headers.host?.toLowerCase() === 'www.ndrkfgc.edu.in' || (pages[normalized] && normalized !== pathname)) {
        const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
        res.writeHead(308, { Location: (req.headers.host?.toLowerCase() === 'www.ndrkfgc.edu.in' ? 'https://ndrkfgc.edu.in' : '') + (pages[normalized] ? normalized : pathname) + query });
        return res.end();
    }
    try {
        if (decodeURIComponent(pathname).split('/').some(part => part.startsWith('.'))) { res.writeHead(404); return res.end(); }
        let file = resolve(root, '.' + decodeURIComponent(pathname));
        if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403); return res.end(); }
        let status = 200;
        try { if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html'); await stat(file); }
        catch { file = resolve(root, '404.html'); status = 404; }
        const body = await readFile(file);
        res.writeHead(status, { 'Content-Type': mime[extname(file)] || 'application/octet-stream',
            'X-Content-Type-Options': 'nosniff', 'Cache-Control': extname(file) === '.html' ? 'no-cache' : 'public, max-age=3600' });
        res.end(req.method === 'HEAD' ? undefined : body);
    } catch { res.writeHead(500); res.end('Unable to serve the site. Run npm run build first.'); }
});
server.listen(Number(process.env.PORT || 3000), process.env.HOST || '127.0.0.1', () => {
    console.log(`NDRK FGC server listening on port ${server.address().port}`);
});
