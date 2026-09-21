import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// Real HTML entry files let static hosts serve direct links without hash routing
// or a 404 redirect hack. Vite's root-absolute asset URLs also work in subfolders.
const output = resolve('dist');
const app = await readFile('src/App.jsx', 'utf8');
const routes = [...app.matchAll(/<Route\s+path="(\/[a-z0-9-]+)"/g)].map((match) => match[1]);
const html = await readFile(resolve(output, 'index.html'), 'utf8');
for (const route of routes) {
    const directory = resolve(output, route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, 'index.html'), html);
}
await writeFile(resolve(output, '404.html'), html);
console.log(`Created ${routes.length} direct-route entry pages and the 404 page.`);
