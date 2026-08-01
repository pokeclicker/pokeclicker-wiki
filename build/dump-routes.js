// Dump every wiki route to build/routes.json by loading the site in headless
// Chrome and reading the typeahead search index (Wiki.searchOptions), which is
// built from live game data and can't run directly in Node.
// Requires bundle.js to be built first (npm run build).
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let filePath = path.join(root, urlPath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403).end();
    return;
  }
  if (urlPath === '/' || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(root, 'index.html');
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

(async () => {
  const puppeteer = require('puppeteer');

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  console.log(`Serving ${root} on port ${port}`);

  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    page.on('pageerror', (err) => console.warn('[page error]', err.message));
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForFunction(
      () => window.Wiki && Wiki.searchOptions && Wiki.searchOptions.length > 100,
      { timeout: 60000 },
    );
    const routes = await page.evaluate(() => Wiki.searchOptions.map((o) => ({ type: o.type, page: o.page })));

    // De-duplicate (search aliases point at the same page)
    const seen = new Set();
    const unique = routes.filter((r) => {
      const key = `${r.type}/${r.page ?? ''}`;
      return r.type && !seen.has(key) && seen.add(key);
    });

    const outFile = path.join(__dirname, 'routes.json');
    fs.writeFileSync(outFile, JSON.stringify(unique, null, 1));
    console.log(`Wrote ${unique.length} routes to ${outFile}`);
  } finally {
    await browser.close();
    server.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
