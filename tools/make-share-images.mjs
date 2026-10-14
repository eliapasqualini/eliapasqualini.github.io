// Generates img/og.png (link preview, 1200x630) and img/apple-touch-icon.png.
// Usage: node tools/make-share-images.mjs
import sharp from 'sharp';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const img = (f) => path.join(ROOT, 'img', f);

const W = 1200, H = 630, P = 380; // canvas and portrait size
const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#0b0f14"/>
  <rect x="0" y="0" width="${W}" height="6" fill="#00b2ff"/>
  <text x="80" y="170" font-family="Consolas, monospace" font-size="30" fill="#00b2ff">// data platform lead @ marlu</text>
  <text x="80" y="275" font-family="Consolas, monospace" font-size="92" font-weight="700" fill="#e6edf3">Elia</text>
  <text x="80" y="380" font-family="Consolas, monospace" font-size="92" font-weight="700" fill="#e6edf3">Pasqualini</text>
  <text x="80" y="460" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#8b98a8">ERP · Business Intelligence · Microsoft Fabric</text>
  <text x="80" y="545" font-family="Consolas, monospace" font-size="26" fill="#7ee787">eliapasqualini.github.io</text>
</svg>`;

const mask = Buffer.from(`<svg width="${P}" height="${P}"><circle cx="${P / 2}" cy="${P / 2}" r="${P / 2}"/></svg>`);
const portrait = await sharp(img('profilocolorato-800.webp')).resize(P, P, { fit: 'cover', position: 'top' })
  .composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
const ring = Buffer.from(`<svg width="${P + 16}" height="${P + 16}"><circle cx="${P / 2 + 8}" cy="${P / 2 + 8}" r="${P / 2 + 5}" fill="none" stroke="#00b2ff" stroke-width="5"/></svg>`);

await sharp(Buffer.from(bg))
  .composite([
    { input: portrait, left: W - P - 90, top: (H - P) / 2 },
    { input: ring, left: W - P - 98, top: (H - P) / 2 - 8 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(img('og.png'));

const icon = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0b0f14"/>
  <text x="9" y="43" font-family="Consolas, monospace" font-size="30" font-weight="700" fill="#e6edf3">ep</text>
  <circle cx="51" cy="41" r="4.5" fill="#00b2ff"/></svg>`);
await sharp(icon).png().toFile(img('apple-touch-icon.png'));
console.log('✓ img/og.png, img/apple-touch-icon.png');
