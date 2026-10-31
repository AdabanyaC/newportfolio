import { cp, mkdir, rm } from 'node:fs/promises';
const output = new URL('./dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'chat.mjs', 'formats.mjs', 'portfolio.json', 'assets', 'ads.txt']) {
  await cp(new URL(file, import.meta.url), new URL(file, output), { recursive: true });
}
await cp(new URL('./public/favicon.ico', import.meta.url), new URL('favicon.ico', output));
console.log('Built static portfolio in dist/');
