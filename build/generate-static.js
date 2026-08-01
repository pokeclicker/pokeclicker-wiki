// Assemble the deployable site into dist/:
//  - copy the SPA and all runtime-fetched content
//  - write a stub index.html per wiki route so deep links return a real 200
//    with per-page <title>/<meta> tags
//  - write 404.html, sitemap.xml and robots.txt
// Routes come from build/routes.json (see dump-routes.js) plus the data/ and
// pages/ folders.
const fs = require('fs');
const path = require('path');
const { segment, buildUrl, cleanFileName } = require('../scripts/wiki-url');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const SITE = 'https://wiki.pokeclicker.com';
const isCI = !!process.env.CI;

// ---------- dist assembly ----------

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const copies = [
  'index.html', 'bundle.js', 'styles.css', 'CNAME', '.nojekyll',
  'pages', 'data', 'templates',
  ['pokeclicker/docs', 'pokeclicker/docs'],
];
for (const entry of copies) {
  const [src, dest] = Array.isArray(entry) ? entry : [entry, entry];
  const srcPath = path.join(root, src);
  if (!fs.existsSync(srcPath)) {
    console.warn(`Skipping missing ${src}`);
    continue;
  }
  fs.cpSync(srcPath, path.join(dist, dest), { recursive: true });
}

// images/ is a folder of symlinks into the pokeclicker submodule (created by
// update.js), copy them one at a time because a few are broken and crash
// cpSync's dereference
const imagesSrc = path.join(root, 'images');
const imagesDest = path.join(dist, 'images');
fs.mkdirSync(imagesDest, { recursive: true });
let brokenLinks = 0;
for (const name of fs.readdirSync(imagesSrc)) {
  try {
    fs.copyFileSync(fs.realpathSync(path.join(imagesSrc, name)), path.join(imagesDest, name));
  } catch (err) {
    // Broken symlinks are expected, anything else should be reported
    const isBrokenLink = fs.lstatSync(path.join(imagesSrc, name)).isSymbolicLink()
      && !fs.existsSync(path.join(imagesSrc, name));
    if (!isBrokenLink) {
      console.warn(`Failed to copy images/${name}: ${err.message}`);
    }
    brokenLinks++;
  }
}
if (brokenLinks) console.warn(`Skipped ${brokenLinks} broken image symlinks`);
console.log('Copied site files to dist/');

// ---------- route enumeration ----------

const routes = new Map(); // 'Type/Name' -> {type, name}
const addRoute = (type, name = '') => {
  if (!type || type === 'Search') return; // /Search/ gets a single stub, added below
  routes.set(`${type}/${name}`, { type, name });
};

// Types: every folder under pages/ and data/
const subdirs = (dir) => fs.existsSync(dir)
  ? fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
  : [];
for (const type of subdirs(path.join(root, 'pages'))) addRoute(type);
routes.set('Search/', { type: 'Search', name: '' });
for (const type of subdirs(path.join(root, 'data'))) addRoute(type);

// Pages: every data markdown file that isn't an overview or description
for (const type of subdirs(path.join(root, 'data'))) {
  for (const file of fs.readdirSync(path.join(root, 'data', type))) {
    if (!file.endsWith('.md') || file.endsWith('_description.md')) continue;
    const name = file.slice(0, -3);
    if (name === 'overview') continue;
    addRoute(type, name);
  }
}

// Game-data routes from the headless-browser dump
const routesJson = path.join(__dirname, 'routes.json');
if (fs.existsSync(routesJson)) {
  for (const { type, page } of JSON.parse(fs.readFileSync(routesJson, 'utf8'))) {
    addRoute(type, page ?? '');
  }
} else if (isCI) {
  console.error('build/routes.json is missing — run build/dump-routes.js first');
  process.exit(1);
} else {
  console.warn('No build/routes.json — generating stubs from data/ and pages/ only');
}

// ---------- stub generation ----------

const DEFAULT_DESCRIPTION = 'PokéClicker Wiki — guides and reference data for the browser game PokéClicker.';

const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Strip markdown syntax down to plain text for use in a meta description
const stripMarkdown = (mdText) => mdText
  .replace(/```[\s\S]*?```/g, ' ')
  .replace(/@?\[\[File:[^\]]*\]\]/g, ' ')
  .replace(/@?\[\[(?:([^/\]]+)\/)?([^\]]*)\]\]/g, (m, t, n) => n || t || '')
  .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\{[^}]*\}/g, ' ')
  .replace(/^#+\s*/gm, '')
  .replace(/[*_`>|~=-]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const readDescription = (type, name) => {
  const tryFiles = [
    name && `data/${cleanFileName(type)}/${cleanFileName(name)}_description.md`,
    `data/${cleanFileName(type)}/overview_description.md`,
  ].filter(Boolean);
  for (const file of tryFiles) {
    const p = path.join(root, file);
    if (fs.existsSync(p)) {
      const text = stripMarkdown(fs.readFileSync(p, 'utf8'));
      if (text) return text.length > 160 ? `${text.slice(0, 157)}...` : text;
    }
  }
  return DEFAULT_DESCRIPTION;
};

const makeStub = ({ title, description, canonical, noindex }) => {
  const head = [
    `        <meta name="description" content="${escapeHtml(description)}">`,
    canonical && `        <link rel="canonical" href="${canonical}">`,
    noindex && '        <meta name="robots" content="noindex">',
    `        <meta property="og:title" content="${escapeHtml(title)}">`,
    `        <meta property="og:description" content="${escapeHtml(description)}">`,
    canonical && `        <meta property="og:url" content="${canonical}">`,
  ].filter(Boolean).join('\n');
  return indexHtml
    .replace('>PokéClicker Wiki</title>', `>${escapeHtml(title)}</title>`)
    .replace('</head>', `${head}\n    </head>`);
};

// Windows can't create dirs with these characters (or trailing dots/spaces),
// those routes only get stubs when built in CI on Linux
const invalidOnWindows = /[<>:"\\|?*]|[. ]$/;

let written = 0;
let skipped = 0;
for (const { type, name } of routes.values()) {
  const dirNames = [type, name].filter(Boolean).map((s) => s.replace(/ /g, '_'));
  if (process.platform === 'win32' && dirNames.some((s) => invalidOnWindows.test(s))) {
    console.warn(`Skipping route with Windows-invalid characters: ${type}/${name}`);
    skipped++;
    continue;
  }
  const dir = path.join(dist, ...dirNames);
  const canonical = SITE + buildUrl(type, name);
  const title = [name, type, 'PokéClicker Wiki'].filter(Boolean).join(' - ');
  try {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), makeStub({
      title,
      description: readDescription(type, name),
      canonical,
    }));
    written++;
  } catch (err) {
    if (isCI) throw err;
    console.warn(`Skipping route ${type}/${name}: ${err.message}`);
    skipped++;
  }
}
console.log(`Wrote ${written} route stubs${skipped ? ` (skipped ${skipped})` : ''}`);

// ---------- 404, sitemap, robots ----------

// 404.html also loads the SPA, so newly created pages still render (with a
// 404 status) until the next deploy adds their stub
fs.writeFileSync(path.join(dist, '404.html'), makeStub({
  title: 'Page not found - PokéClicker Wiki',
  description: DEFAULT_DESCRIPTION,
  noindex: true,
}));

const sitemapUrls = [`${SITE}/`, ...[...routes.values()].map(({ type, name }) => SITE + buildUrl(type, name))];
fs.writeFileSync(path.join(dist, 'sitemap.xml'), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapUrls.map((u) => `  <url><loc>${escapeHtml(u)}</loc></url>`),
  '</urlset>',
  '',
].join('\n'));

fs.writeFileSync(path.join(dist, 'robots.txt'), [
  'User-agent: *',
  'Allow: /',
  `Sitemap: ${SITE}/sitemap.xml`,
  '',
].join('\n'));

console.log(`Wrote 404.html, sitemap.xml (${sitemapUrls.length} URLs) and robots.txt`);
