// Automated QA for the letter archive. Run with `npm run check:letters`.
// Bundles the TS data with esbuild (already present via Vite), then checks
// schema, distribution, prose hygiene, near-duplicates and the manifest.

import { build } from 'esbuild';
import prettier from 'prettier';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const tmp = await mkdtemp(path.join(tmpdir(), 'atira-letters-'));
const outfile = path.join(tmp, 'letters.mjs');

try {
  await build({
    entryPoints: [path.join(ROOT, 'src/letters.ts')],
    outfile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
  });
} catch (e) {
  console.error('Could not bundle src/letters.ts:', e.message);
  process.exit(1);
}

const { LETTERS, CATEGORY_DEFS } = await import(pathToFileURL(outfile).href);
await rm(tmp, { recursive: true, force: true });

const issues = [];
const notes = [];
const fail = (msg) => issues.push(msg);
const note = (msg) => notes.push(msg);

// ---- schema ---------------------------------------------------------------
if (LETTERS.length < 2401) fail(`Only ${LETTERS.length} letters (need at least 2401).`);

const ids = new Set();
const slugs = new Set();
const titles = new Set();
for (const l of LETTERS) {
  for (const field of ['id', 'title', 'slug', 'category', 'content', 'mood']) {
    if (typeof l[field] !== 'string' || !l[field].trim()) fail(`${l.id ?? '??'}: missing ${field}.`);
  }
  if (ids.has(l.id)) fail(`Duplicate id ${l.id}.`);
  ids.add(l.id);
  if (slugs.has(l.slug)) fail(`Duplicate slug ${l.slug}.`);
  slugs.add(l.slug);
  const titleKey = l.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (titles.has(titleKey)) fail(`Duplicate title “${l.title}”.`);
  titles.add(titleKey);
  if (l.date !== 'undated') fail(`${l.id}: date must be 'undated', got '${l.date}'.`);
  if (!Array.isArray(l.tags) || !l.tags.length) fail(`${l.id}: no tags.`);
  if (!Array.isArray(l.literaryReferences)) fail(`${l.id}: literaryReferences is not an array.`);
  if (typeof l.featured !== 'boolean') fail(`${l.id}: featured must be boolean.`);
  if (!CATEGORY_DEFS.some((c) => c.id === l.category)) fail(`${l.id}: unknown category ${l.category}.`);

  const words = (l.content.trim().match(/\S+/g) ?? []).length;
  if (words < 90 || words > 650) fail(`${l.id}: ${words} words, outside 90–650.`);
  const expected = Math.max(1, Math.round(words / 180));
  if (l.readingTime !== expected) fail(`${l.id}: readingTime ${l.readingTime}, expected ${expected}.`);

  const q = (l.content.match(/\?/g) ?? []).length;
  if (q > 2) fail(`${l.id}: ${q} rhetorical questions.`);
  const dash = (l.content.match(/—/g) ?? []).length;
  const semi = (l.content.match(/;/g) ?? []).length;
  if (dash > 2 || semi > 2) fail(`${l.id}: ${dash} em dashes, ${semi} semicolons.`);

  const noBold = l.content.replace(/\*\*/g, '');
  if ((noBold.match(/\*/g) ?? []).length % 2 || (l.content.match(/_/g) ?? []).length % 2) {
    fail(`${l.id}: unmatched Markdown emphasis.`);
  }
  if (/<[a-z!/]/i.test(l.content)) fail(`${l.id}: raw HTML in Markdown.`);
}

// ---- distribution ---------------------------------------------------------
const counts = Object.fromEntries(CATEGORY_DEFS.map((c) => [c.id, 0]));
for (const l of LETTERS) if (l.category in counts) counts[l.category]++;
for (const c of CATEGORY_DEFS) {
  if (counts[c.id] !== c.target) fail(`Category ${c.id}: ${counts[c.id]} / ${c.target}.`);
}

// ---- length spread --------------------------------------------------------
const lengths = { short: 0, medium: 0, long: 0 };
for (const l of LETTERS) {
  const w = (l.content.match(/\S+/g) ?? []).length;
  if (w < 170) lengths.short++;
  else if (w < 380) lengths.medium++;
  else lengths.long++;
}
if (lengths.short < 80) fail(`Only ${lengths.short} short letters (need 80+).`);
if (lengths.medium < 500) fail(`Only ${lengths.medium} medium letters (need 500+).`);
if (lengths.long < 40) fail(`Only ${lengths.long} long letters (need 40+).`);

// ---- repeated language ----------------------------------------------------
const banned = [
  'you are my universe',
  'my entire universe',
  'entire universe',
  'endless expanse',
  'the tapestry',
  'delve into',
  'testament to',
  'more than words can say',
  'little did i know',
  'in conclusion',
];
for (const phrase of banned) {
  const n = LETTERS.filter((l) => l.content.toLowerCase().includes(phrase)).length;
  if (n) fail(`Banned phrase “${phrase}” appears in ${n} letters.`);
}

const cosmos = ['stars', 'galaxies', 'galaxy', 'moons', 'moon', 'oceans', 'ocean', 'eternity', 'infinite'];
for (const word of cosmos) {
  const n = LETTERS.filter((l) => new RegExp(`\\b${word}\\b`, 'i').test(l.content)).length;
  if (n > 48) fail(`“${word}” appears in ${n} letters (limit 48).`);
}

const petNames = [
  'daisy',
  'buttercup',
  'princess',
  'darling',
  'angel',
  'hon',
  'tamatar',
  'boyfie',
  'wifey',
  'kid',
  'sir',
  'my eternity',
  'infinity',
];
for (const name of petNames) {
  const n = LETTERS.filter((l) => new RegExp(`\\b${name}\\b`, 'i').test(l.content)).length;
  if (n > 60) fail(`Pet name “${name}” appears in ${n} letters (limit 60).`);
}

// ---- near duplicates ------------------------------------------------------
const shingles = new Map();
for (const l of LETTERS) {
  const words = l.content
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const set = new Set();
  for (let i = 0; i <= words.length - 6; i++) set.add(words.slice(i, i + 6).join(' '));
  shingles.set(l.id, set);
}
// Inverted index keeps this near-linear instead of O(n²) over 2,400 letters.
const ownersByShingle = new Map();
for (const [id, set] of shingles) {
  for (const s of set) {
    let owners = ownersByShingle.get(s);
    if (!owners) ownersByShingle.set(s, (owners = []));
    owners.push(id);
  }
}
const overlaps = new Map();
for (const owners of ownersByShingle.values()) {
  for (let i = 0; i < owners.length; i++) {
    for (let j = i + 1; j < owners.length; j++) {
      const key = owners[i] < owners[j] ? `${owners[i]}|${owners[j]}` : `${owners[j]}|${owners[i]}`;
      overlaps.set(key, (overlaps.get(key) ?? 0) + 1);
    }
  }
}
for (const [key, inter] of overlaps) {
  const [a, b] = key.split('|');
  const jac = inter / (shingles.get(a).size + shingles.get(b).size - inter);
  if (jac > 0.3) fail(`Near-duplicate: ${a} / ${b} (${(jac * 100).toFixed(0)}%).`);
}

const openings = new Map();
for (const l of LETTERS) {
  const key = l.content.trim().split(/\s+/).slice(0, 6).join(' ').toLowerCase();
  if (openings.has(key)) fail(`Repeated opening: ${openings.get(key)} / ${l.id}.`);
  openings.set(key, l.id);
}

// ---- literary references --------------------------------------------------
const KNOWN = {
  'White Nights': ['Fyodor Dostoevsky'],
  'The Idiot': ['Fyodor Dostoevsky'],
  'The Brothers Karamazov': ['Fyodor Dostoevsky'],
  'Crime and Punishment': ['Fyodor Dostoevsky'],
  'Notes from Underground': ['Fyodor Dostoevsky'],
  'Romeo and Juliet': ['William Shakespeare'],
  Hamlet: ['William Shakespeare'],
  'The Tempest': ['William Shakespeare'],
  'The Sonnets': ['William Shakespeare'],
  'Pride and Prejudice': ['Jane Austen'],
  'Jane Eyre': ['Charlotte Brontë'],
  'Wuthering Heights': ['Emily Brontë'],
  'The Nightingale and the Rose': ['Oscar Wilde'],
  'The Little Prince': ['Antoine de Saint-Exupéry'],
  Siddhartha: ['Hermann Hesse'],
  'Love in the Time of Cholera': ['Gabriel García Márquez'],
  'The Divine Comedy': ['Dante Alighieri'],
  'Orpheus and Eurydice': ['Greek mythology'],
  'Psyche and Eros': ['Greek mythology'],
  'Anna Karenina': ['Leo Tolstoy'],
  'War and Peace': ['Leo Tolstoy'],
  'Fathers and Sons': ['Ivan Turgenev'],
  'The Cherry Orchard': ['Anton Chekhov'],
  'Beauty and the Beast': ['Fairy tale'],
  'The Little Mermaid': ['Hans Christian Andersen'],
  'Sleeping Beauty': ['Fairy tale'],
  'The Art of War': ['Sun Tzu'],
  'The Odyssey': ['Homer'],
};
for (const l of LETTERS) {
  for (const r of l.literaryReferences) {
    if (!KNOWN[r.work]) fail(`${l.id}: unlisted work “${r.work}”.`);
    else if (!KNOWN[r.work].includes(r.author))
      fail(`${l.id}: “${r.work}” author should be ${KNOWN[r.work].join(' / ')}.`);
    if (!r.context || r.context.length < 12) fail(`${l.id}: thin context for “${r.work}”.`);
  }
}

// ---- manifest -------------------------------------------------------------
const manifest = await readFile(path.join(ROOT, 'docs/LETTERS_MANIFEST.md'), 'utf8');
for (let i = 1; i <= 97; i++) {
  const batch = `batch-${String(i).padStart(2, '0')}`;
  if (!manifest.includes(batch)) fail(`Manifest missing ${batch}.`);
}
if (!manifest.includes('L001') || !manifest.includes('L2401')) fail('Manifest missing ID range markers.');

// ---- report ---------------------------------------------------------------
if (!issues.length) note('All automated checks passed.');
const report = [
  '# Letter archive QA report',
  '',
  `Verdict: **${issues.length ? 'FAIL' : 'PASS'}**`,
  '',
  `Records: ${LETTERS.length}`,
  '',
  '| Category | Count | Target |',
  '|---|---:|---:|',
  ...CATEGORY_DEFS.map((c) => `| ${c.label} | ${counts[c.id]} | ${c.target} |`),
  '',
  `Length spread: ${lengths.short} short, ${lengths.medium} medium, ${lengths.long} long.`,
  '',
  '## Issues',
  ...(issues.length ? issues.map((i) => `- ${i}`) : ['- None.']),
  '',
  '## Notes',
  ...notes.map((n) => `- ${n}`),
  '',
].join('\n');
const formattedReport = await prettier.format(report, { filepath: 'docs/LETTER_QA_REPORT.md' });
await writeFile(path.join(ROOT, 'docs/LETTER_QA_REPORT.md'), formattedReport);

console.log(`Letters: ${LETTERS.length} | categories: ${CATEGORY_DEFS.length} | issues: ${issues.length}`);
if (issues.length) {
  console.error(issues.slice(0, 40).join('\n'));
  if (issues.length > 40) console.error(`…and ${issues.length - 40} more. See docs/LETTER_QA_REPORT.md`);
  process.exit(1);
}
console.log('PASS — see docs/LETTER_QA_REPORT.md');
