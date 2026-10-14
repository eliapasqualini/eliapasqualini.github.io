// Converts source photos into web-ready WebP files.
// Usage: npm run images   (processes the original photos in ./foto, which is not tracked by git)
// Output: ./img/<name>-800.webp and ./img/<name>-1600.webp (+ <name>-400.webp for avatars)
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const SOURCES = [path.join(ROOT, 'foto'), ROOT];
const OUT = path.join(ROOT, 'img');
const EXT = /\.(jpe?g|png|heic|webp|tiff?)$/i;
const SKIP = /^background/i; // old site backgrounds, not needed
const WIDTHS = [800, 1600];

await mkdir(OUT, { recursive: true });
let before = 0, after = 0, count = 0;

for (const dir of SOURCES) {
  let files;
  try { files = await readdir(dir); } catch { continue; }
  for (const file of files) {
    if (!EXT.test(file) || SKIP.test(file)) continue;
    const src = path.join(dir, file);
    const name = path.parse(file).name.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
    before += (await stat(src)).size;
    const widths = name.startsWith('profilo') ? [400, ...WIDTHS] : WIDTHS;
    for (const w of widths) {
      const dest = path.join(OUT, `${name}-${w}.webp`);
      const info = await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
      after += info.size;
    }
    count++;
    console.log(`✓ ${file}`);
  }
}
console.log(`\n${count} photos · ${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(1)} MB (all sizes)`);
