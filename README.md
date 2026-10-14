# eliapasqualini.github.io

My personal website — live at **https://eliapasqualini.github.io**.

A single-page, framework-free site (HTML, CSS, vanilla JS) with a README-style intro, a tongue-in-cheek "by the numbers" dashboard, projects shown as a file explorer, a photo gallery, a "Now" section and a built-in terminal (press `\` or `` ` ``).

## Editing content

All text and data live in [`data.js`](data.js) (Italian + English). Layout is in `index.html` and `style.css`, behaviour in `app.js`.

## Photos

Original photos go in `foto/` (ignored by git). To generate the optimised WebP files in `img/`:

```bash
npm install
npm run images
```

`node tools/make-share-images.mjs` regenerates the link-preview image (`img/og.png`) and the touch icon.

## Local preview

```bash
npx serve .
```
