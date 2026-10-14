// Generates img/og.png (link preview, 1200x630) and img/apple-touch-icon.png.
// Uses the cut-out hero portrait (img/hero-900.webp), tinted like on the site.
// Usage: node tools/make-share-images.mjs
import sharp from 'sharp';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const img = (f) => path.join(ROOT, 'img', f);

const W = 1200, H = 630, PH = 560; // canvas and portrait height
const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="38%" r="60%">
      <stop offset="0" stop-color="#00b2ff" stop-opacity=".42"/>
      <stop offset=".6" stop-color="#00b2ff" stop-opacity=".08"/>
      <stop offset="1" stop-color="#00b2ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0b0f14"/>
  <rect x="0" y="0" width="${W}" height="6" fill="#00b2ff"/>
  <path d="M700,${H} V280 A220,220 0 0 1 1140,280 V${H} Z" fill="url(#glow)" stroke="#00b2ff" stroke-opacity=".3" stroke-width="2"/>
  <text x="70" y="170" font-family="Consolas, monospace" font-size="30" fill="#00b2ff">// data platform lead @ marlu</text>
  <text x="70" y="275" font-family="Consolas, monospace" font-size="92" font-weight="700" fill="#e6edf3">Elia</text>
  <text x="70" y="380" font-family="Consolas, monospace" font-size="92" font-weight="700" fill="#e6edf3">Pasqualini</text>
  <text x="70" y="460" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#8b98a8">ERP · Business Intelligence · Microsoft Fabric</text>
  <text x="70" y="545" font-family="Consolas, monospace" font-size="26" fill="#7ee787">eliapasqualini.github.io</text>
</svg>`;

// Blue-tinted portrait, like the default (non-hover) look on the site.
const portrait = await sharp(img('hero-900.webp'))
  .resize({ height: PH })
  .modulate({ saturation: 0 })
  .tint('#8fdcff')
  .linear(1.12, -10)
  .png()
  .toBuffer({ resolveWithObject: true });
const left = W - portrait.info.width - 30;

await sharp(Buffer.from(bg))
  .composite([{ input: portrait.data, left, top: H - portrait.info.height }])
  .png({ compressionLevel: 9 })
  .toFile(img('og.png'));

const icon = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0b0f14"/>
  <text x="9" y="43" font-family="Consolas, monospace" font-size="30" font-weight="700" fill="#e6edf3">ep</text>
  <circle cx="51" cy="41" r="4.5" fill="#00b2ff"/></svg>`);
await sharp(icon).png().toFile(img('apple-touch-icon.png'));
console.log('✓ img/og.png, img/apple-touch-icon.png');
