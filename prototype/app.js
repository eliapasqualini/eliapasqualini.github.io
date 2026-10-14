(() => {
  'use strict';

  const S = window.SITE;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  let lang = store.get('lang') || ((navigator.language || 'it').toLowerCase().startsWith('it') ? 'it' : 'en');
  let galFilter = 'all';
  const t = (k) => S.i18n[lang][k] ?? k;
  const L = (o) => (o && typeof o === 'object' ? o[lang] : o);
  const EX = () => `<span class="todo">${t('example')}</span>`;

  /* ================= RENDER ================= */
  function renderText() {
    root.lang = lang;
    $$('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    $('#langBtn').textContent = lang === 'it' ? 'EN' : 'IT';
    $('#langBtn').setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all’italiano');
  }

  /* ---------- 01 · README.md ---------- */
  let readmeView = 'preview';
  const inlineMd = (s) => esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, a, h) => `<a href="${h}"${h.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${a}</a>`)
    .replace(/\{\{ex\}\}/g, EX());
  function mdToHtml(src) {
    let html = '', list = false, para = [];
    const flush = () => { if (para.length) { html += `<p>${inlineMd(para.join(' '))}</p>`; para = []; } if (list) { html += '</ul>'; list = false; } };
    src.split('\n').forEach((line) => {
      let m;
      if ((m = line.match(/^(#{1,3}) (.*)/))) { flush(); html += `<h${m[1].length + 2}>${inlineMd(m[2])}</h${m[1].length + 2}>`; }
      else if ((m = line.match(/^> (.*)/))) { flush(); html += `<blockquote>${inlineMd(m[1])}</blockquote>`; }
      else if ((m = line.match(/^- (.*)/))) { if (para.length) flush(); if (!list) { html += '<ul>'; list = true; } html += `<li>${inlineMd(m[1])}</li>`; }
      else if (!line.trim()) flush();
      else { if (list) flush(); para.push(line); }
    });
    flush();
    return html;
  }
  function mdToCode(src) {
    return '<pre class="md-code">' + src.split('\n').map((l) => {
      let h = esc(l);
      if (/^#/.test(l)) h = `<span class="tk-k">${h}</span>`;
      else if (/^>/.test(l)) h = `<span class="tk-c">${h}</span>`;
      else h = h.replace(/^(- )/, '<span class="tk-p">$1</span>').replace(/(\*\*[^*]+\*\*)/g, '<span class="tk-n">$1</span>')
        .replace(/(`[^`]+`)/g, '<span class="tk-s">$1</span>').replace(/(\[[^\]]+\]\([^)]+\))/g, '<span class="tk-v">$1</span>');
      return `<span class="ln">${h || ' '}</span>`;
    }).join('') + '</pre>';
  }
  function renderReadme() {
    const src = S.readme[lang];
    $('#readmeBody').innerHTML = readmeView === 'code' ? mdToCode(src) : mdToHtml(src);
    $('#readmeBody').classList.toggle('as-code', readmeView === 'code');
    $$('[data-readme]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.readme === readmeView));
  }

  /* ---------- 03 · Projects explorer ---------- */
  const hash = (id) => { let h = 0x811c9dc5; for (const ch of id + 'elia') { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; } return h.toString(16).padStart(8, '0').slice(0, 7); };
  const techs = [...new Set(S.commits.filter((c) => c.file).flatMap((c) => (c.r.stack || []).map((s) => s[0])))].sort((a, b) => a.localeCompare(b));
  const PROJECTS = S.commits.filter((c) => c.file);
  const FOLDERS = ['work', 'uni', 'personal'];
  const folderOpen = { work: true, uni: true, personal: true };
  let projSel = PROJECTS[0].id;

  function renderProjects() {
    const c = PROJECTS.find((x) => x.id === projSel), r = c.r;
    const sec = (k) => (r[k] ? `<h5>${t('proj.' + k)}</h5><p>${inlineMd(L(r[k]))}</p>` : '');
    const arch = r.arch && r.arch.length > 1 ? `<h5>${t('proj.arch')}</h5><div class="flow">${r.arch.map((n, i) => `${i ? '<span class="flow-arrow" aria-hidden="true"><i></i></span>' : ''}<span class="flow-node">${esc(n)}</span>`).join('')}</div>` : '';
    const stack = r.stack ? `<h5>${t('proj.stack')}</h5><ul class="stack">${r.stack.map(([k, why]) => `<li><code>${esc(k)}</code><span>${esc(L(why))}</span></li>`).join('')}</ul>` : '';
    $('#projEx').innerHTML = `
      <nav class="ex-side" aria-label="${t('proj.title')}"><div class="ex-hd">${t('proj.explorer')}</div>
        ${FOLDERS.map((b) => {
          const items = PROJECTS.filter((x) => x.branch === b);
          return `<button class="ex-folder" aria-expanded="${folderOpen[b]}" data-folder="${b}"><span class="car" aria-hidden="true">▾</span>📁 ${b}/
              <small>${b === 'work' ? '🔒 NDA' : items.length}</small></button>
            <ul class="ex-files"${folderOpen[b] ? '' : ' hidden'}>${items.map((x) => `<li><button class="ex-file${x.id === projSel ? ' on' : ''}" data-proj="${x.id}" aria-current="${x.id === projSel}">
              <span class="ico" aria-hidden="true">M↓</span>${x.file}.md${x.link ? '<span class="ext" title="GitHub">↗</span>' : ''}</button></li>`).join('')}</ul>`;
        }).join('')}
      </nav>
      <div class="ex-main">
        <div class="ex-tabs"><span class="ex-tab">${c.file}.md</span></div>
        <div class="ex-crumb">${t('proj.root')} › ${c.branch} › ${c.file}.md</div>
        <article class="ex-body md" id="projDoc">
          <h3>${esc(L(c.t)).replace(/^./, (m) => m.toUpperCase())} ${c.ex ? EX() : ''}</h3>
          <div class="ex-meta"><span>${esc(S.scopes[c.scope] ? L(S.scopes[c.scope]) : c.scope)}</span><span>·</span><span>${c.year}${c.yq ? '?' : ''}</span>
            ${c.nda ? '<span class="badge"><b>code</b><i class="nda">🔒 NDA</i></span>' : c.link ? '<span class="badge"><b>code</b><i class="pub">public</i></span>' : ''}</div>
          ${c.nda ? `<blockquote class="callout">${t('proj.nda')}</blockquote>` : ''}
          ${sec('context')}${sec('problem')}${sec('solution')}${arch}${stack}${sec('outcome')}
          ${c.link ? `<a class="btn primary sm" href="${c.link}" target="_blank" rel="noopener">${t('proj.repo')} ↗</a>` : ''}
        </article>
      </div>`;
  }

  function selectProject(id, { focus = false } = {}) {
    projSel = id; renderProjects();
    if (focus) $(`[data-proj="${id}"]`)?.focus();
    else if (innerWidth < 760) $('#projDoc').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }


  /* ---------- Gallery ---------- */
  const galCats = ['all', 'travel', 'milestones', 'people', 'sport'];
  const img = (name, w = 800) => `../img/${name}-${w}.webp`;
  const galVisible = () => S.gallery.filter((g) => galFilter === 'all' || g.cat === galFilter);
  function renderGallery() {
    $('#galFilters').innerHTML = galCats.filter((c) => c === 'all' || S.gallery.some((g) => g.cat === c))
      .map((c) => `<button class="chip" data-g="${c}" aria-pressed="${c === galFilter}">${t('life.' + c)}</button>`).join('');
    $('#galleryList').innerHTML = galVisible().map((g, i) =>
      `<button class="shot" data-i="${i}" style="--tilt:${[-2, 1.5, -1, 2.5][i % 4]}deg">
        <img src="${img(g.photo)}" srcset="${img(g.photo)} 800w, ${img(g.photo, 1600)} 1600w" sizes="(max-width: 600px) 90vw, 300px" alt="${esc(L(g.c))}" loading="lazy">
        <span class="shot-cap"><b>${esc(L(g.c))}</b><small>${g.d}</small></span></button>`).join('');
  }
  let lbIndex = 0, lbList = [];
  function openLightbox(i, list) {
    if (list) lbList = list;
    if (!lbList.length) return;
    lbIndex = (i + lbList.length) % lbList.length;
    const g = lbList[lbIndex], lb = $('#lightbox');
    $('img', lb).src = img(g.photo, 1600); $('img', lb).alt = g.cap;
    $('figcaption', lb).textContent = g.cap;
    lb.hidden = false;
  }

  /* ---------- 02 · Elia in numeri ---------- */
  const fmtN = (n) => new Intl.NumberFormat(lang === 'it' ? 'it-IT' : 'en-GB').format(n);
  const BIRTH = new Date(S.numbers.birth + 'T00:00:00');
  const ageNow = () => { const d = new Date(); let a = d.getFullYear() - BIRTH.getFullYear(); if (d < new Date(d.getFullYear(), BIRTH.getMonth(), BIRTH.getDate())) a--; return a; };
  const METRICS = {
    age: ageNow,
    projects: () => S.commits.filter((c) => c.file).length,
    nda: () => S.commits.filter((c) => c.file && c.nda).length,
    public: () => S.commits.filter((c) => c.file && c.link).length,
    photos: () => S.gallery.length,
  };
  const monthsTo = (ym) => { const [y, m] = ym.split('-').map(Number), d = new Date(); return (y - d.getFullYear()) * 12 + (m - 1 - d.getMonth()); };

  function tileHTML(x) {
    const label = `<span class="nb-l">${esc(L(x.l))}${x.ex ? ' ' + EX() : ''}</span>`;
    const note = x.n ? `<small class="nb-n">${esc(L(x.n))}</small>` : '';
    if (x.type === 'uptime') return `<div class="nb-tile wide">${label}<b class="nb-up" data-uptime></b>${note}</div>`;
    if (x.type === 'countdown') {
      const m = monthsTo(x.to);
      return `<div class="nb-tile">${label}<b class="nb-v"><span data-count="${Math.max(0, m)}">${Math.max(0, m)}</span><em>${lang === 'it' ? (m === 1 ? 'mese' : 'mesi') : (m === 1 ? 'month' : 'months')}</em></b>${note}</div>`;
    }
    if (x.type === 'gauge') {
      const p = x.value / x.max, R = 46, a = Math.PI * p, ex = 60 - R * Math.cos(a), ey = 56 - R * Math.sin(a);
      return `<div class="nb-tile">${label}
        <svg class="nb-gauge" viewBox="0 0 120 64" role="img" aria-label="${x.value}/${x.max}">
          <path d="M14,56 A46,46 0 0 1 106,56" class="g-bg"/>
          <path d="M14,56 A46,46 0 0 1 ${ex.toFixed(1)},${ey.toFixed(1)}" class="g-fg" pathLength="1" style="--p:1"/>
          <text x="60" y="52" text-anchor="middle">${x.value}<tspan>/${x.max}</tspan></text></svg>${note}</div>`;
    }
    if (x.type === 'bars') {
      const counts = techs.map((k) => [k, S.commits.filter((c) => c.file && (c.r.stack || []).some((s) => s[0] === k)).length])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 6);
      const max = counts[0][1];
      return `<div class="nb-tile wide">${label}<ul class="nb-bars">${counts.map(([k, v]) => `<li><span>${esc(k)}</span><i style="--w:${(v / max) * 100}%"></i><b>${v}</b></li>`).join('')}</ul><small class="nb-n mono">${esc(L(x.n))}</small></div>`;
    }
    const raw = typeof x.value === 'string' && x.value.startsWith('=') ? METRICS[x.value.slice(1)]() : L(x.value);
    const val = typeof raw === 'number' ? `<span data-count="${raw}">${fmtN(raw)}</span>` : esc(raw);
    return `<div class="nb-tile">${label}<b class="nb-v${x.size === 'sm' ? ' sm' : ''}">${x.prefix ? `<em class="pre">${x.prefix}</em>` : ''}${val}</b>${note}</div>`;
  }

  function renderNumbers() {
    $('#numbersDash').innerHTML = `
      <div class="nb-bar"><span class="mono">elia_in_numeri.dash</span><span class="nb-live">● LIVE</span>
        <span class="nb-src">${t('nb.source')}</span></div>
      ${S.numbers.groups.map((g, gi) => `<section class="nb-group reveal">
        <header><span class="nb-ico" aria-hidden="true">${g.icon}</span><div><h3><span class="mono muted">0${gi + 1}.</span> ${esc(L(g.t))}</h3><p>${esc(L(g.s))}</p></div></header>
        <div class="nb-grid">${g.tiles.map(tileHTML).join('')}</div></section>`).join('')}`;
    tickUptime();
    $$('#numbersDash [data-count]').forEach((el) => countIO.observe(el));
    $$('#numbersDash .reveal').forEach((el) => revealIO.observe(el));
  }

  function tickUptime() {
    const el = $('[data-uptime]'); if (!el) return;
    const now = new Date(), age = ageNow();
    const lastBday = new Date(BIRTH); lastBday.setFullYear(BIRTH.getFullYear() + age);
    const ms = now - lastBday, days = Math.floor(ms / 864e5), rest = ms % 864e5;
    const hh = String(Math.floor(rest / 36e5)).padStart(2, '0'), mm = String(Math.floor(rest / 6e4) % 60).padStart(2, '0'), ss = String(Math.floor(rest / 1e3) % 60).padStart(2, '0');
    el.innerHTML = `${age}<em>${lang === 'it' ? 'anni' : 'y'}</em> ${days}<em>${lang === 'it' ? 'g' : 'd'}</em> <span class="mono">${hh}:${mm}:${ss}</span>`;
  }
  setInterval(tickUptime, 1000);

  function countUp(el) {
    const end = +el.dataset.count;
    if (reduceMotion || !end) { el.textContent = fmtN(end); return; }
    const t0 = performance.now(), dur = 1100;
    const step = (now) => { const p = Math.min(1, (now - t0) / dur); el.textContent = fmtN(Math.round(end * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target); countIO.unobserve(e.target); } });
  }, { threshold: 0.6 });

  /* ---------- 05 · Now ---------- */
  function renderNow() {
    const [y, m] = S.now.updated.split('-').map(Number);
    $('#nowUpdated').textContent = `· ${t('now.updated')} ${new Date(y, m - 1, 1).toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-GB', { month: 'long', year: 'numeric' })}`;
    $('#nowList').innerHTML = S.now.items.map((n) => {
      const ico = n.logo ? `<img class="now-logo" src="../img/${n.logo}" alt="">` : `<span class="now-ico" aria-hidden="true">${n.icon}</span>`;
      const extra = n.spotify
        ? `<iframe class="now-spotify" src="https://open.spotify.com/embed/track/${n.spotify}?utm_source=generator&theme=0" height="80" loading="lazy" title="Spotify: ${esc(L(n.v))} – ${esc(L(n.sub))}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
        : n.countdown ? `<span class="now-count">${countdown(n.countdown)}</span>` : '';
      return `<div class="now-card reveal${n.cover ? ' has-cover' : ''}">
        ${n.cover ? `<img class="now-cover" src="../img/${n.cover}" alt="${esc(L(n.v))}" loading="lazy">` : ''}
        <div class="now-text">${ico}<small>${esc(L(n.k))}</small><b>${esc(L(n.v))}</b>${n.sub ? `<span class="now-sub">${esc(L(n.sub))}</span>` : ''}${n.ex ? EX() : ''}</div>
        ${extra}</div>`;
    }).join('');
  }
  function countdown(ym) {
    const [y, m] = ym.split('-').map(Number), now = new Date();
    const months = (y - now.getFullYear()) * 12 + (m - 1 - now.getMonth());
    if (months <= 0) return lang === 'it' ? 'ci siamo! 🎒' : 'it’s time! 🎒';
    return lang === 'it' ? `tra ${months} ${months === 1 ? 'mese' : 'mesi'}` : `in ${months} month${months === 1 ? '' : 's'}`;
  }


  function renderAll() {
    renderText(); renderReadme(); renderNumbers(); renderProjects(); renderGallery(); renderNow();
    $$('.reveal').forEach((el) => el.classList.add('in'));
  }

  /* ================= OBSERVERS ================= */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); } });
  }, { threshold: 0.12 });
  const observeReveal = () => $$('.reveal:not(.in)').forEach((el) => revealIO.observe(el));



  /* ================= TYPED CODE ================= */
  const codeTokens = [
    ['c', '// hello, world 👋\n'],
    ['k', 'const '], ['v', 'elia'], ['', ' = {\n'],
    ['p', '  role'], ['', ': '], ['s', "'Data Platform Lead'"], ['', ',\n'],
    ['p', '  company'], ['', ': '], ['s', "'Marlu'"], ['', ',\n'],
    ['p', '  based'], ['', ': '], ['s', "'San Marino 🇸🇲'"], ['', ',\n'],
    ['p', '  education'], ['', ': ['], ['s', "'BSc'"], ['', ', '], ['s', "'MSc'"], ['', '],  '], ['c', '// UniBo · Cesena\n'],
    ['p', '  stack'], ['', ': ['], ['s', "'SQL'"], ['', ', '], ['s', "'Power BI'"], ['', ', '], ['s', "'Python'"], ['', ', '], ['s', "'JS'"], ['', '],\n'],
    ['p', '  offline'], ['', ': ['], ['s', "'travel ✈️'"], ['', ', '], ['s', "'futsal ⚽'"], ['', '],\n'],
    ['p', '  coffee'], ['', ': '], ['n', 'Infinity'], ['', ',\n'],
    ['', '};\n\n'],
    ['v', 'elia'], ['', '.'], ['p', 'build'], ['', '('], ['s', "'something together'"], ['', ');'],
  ];
  function typeCode() {
    const pre = $('#codeTyped');
    const spans = codeTokens.map(([c, txt]) => { const s = document.createElement('span'); if (c) s.className = 'tk-' + c; s.dataset.full = txt; pre.appendChild(s); return s; });
    const caret = document.createElement('span'); caret.className = 'caret'; pre.appendChild(caret);
    if (reduceMotion) { spans.forEach((s) => { s.textContent = s.dataset.full; }); return; }
    let ti = 0, ci = 0;
    const tick = () => {
      if (ti >= spans.length) return;
      const s = spans[ti], full = [...s.dataset.full];
      s.textContent = full.slice(0, ++ci).join('');
      const ch = full[ci - 1];
      if (ci >= full.length) { ti++; ci = 0; }
      setTimeout(tick, ch === '\n' ? 140 : 18 + Math.random() * 30);
    };
    setTimeout(tick, 500);
  }

  function setLang(l) { lang = l; store.set('lang', l); renderAll(); }

  /* ================= TERMINAL ================= */
  const term = $('#term'), tBody = $('#termBody'), tInput = $('#termInput');
  const hist = []; let hIdx = 0;

  const TABLES = {
    projects: () => S.commits.filter((c) => c.file).map((c) => ({ hash: hash(c.id), branch: S.branches[c.branch].label, year: c.year, title: c.t.en, stack: (c.r.stack || []).map((x) => x[0]).join('|'), nda: c.nda ? 'yes' : 'no' })),
    stack: () => techs.map((k) => ({ tech: k, projects: S.commits.filter((c) => (c.r.stack || []).some((x) => x[0] === k)).length })),
  };
  function asciiTable(rows, cols) {
    const w = cols.map((c) => Math.max(c.length, ...rows.map((r) => String(r[c]).length)));
    const line = '+' + w.map((n) => '-'.repeat(n + 2)).join('+') + '+';
    const fmt = (vals) => '| ' + vals.map((v, i) => String(v).padEnd(w[i])).join(' | ') + ' |';
    return [line, fmt(cols), line, ...rows.map((r) => fmt(cols.map((c) => r[c]))), line, `(${rows.length} row${rows.length === 1 ? '' : 's'})`].join('\n');
  }
  function sql(q) {
    const m = q.match(/^select\s+(.+?)\s+from\s+(\w+)(?:\s+where\s+(\w+)\s*(=|!=|>=|<=|>|<|like)\s*('?)(.+?)\5)?(?:\s+order\s+by\s+(\w+)(?:\s+(asc|desc))?)?(?:\s+limit\s+(\d+))?\s*;?$/i);
    if (!m) return '<span class="err">syntax error. try: SELECT title, year FROM projects WHERE nda = \'yes\' ORDER BY year DESC</span>';
    const [, colsRaw, tbl, wc, op, , wv, ob, dir, lim] = m;
    if (!TABLES[tbl.toLowerCase()]) return `<span class="err">relation "${esc(tbl)}" does not exist. tables: ${Object.keys(TABLES).join(', ')}</span>`;
    let rows = TABLES[tbl.toLowerCase()]();
    const all = Object.keys(rows[0]);
    const cols = colsRaw.trim() === '*' ? all : colsRaw.split(',').map((c) => c.trim().toLowerCase());
    const bad = [...cols, wc, ob].filter((c) => c && !all.includes(c.toLowerCase()));
    if (bad.length) return `<span class="err">column "${esc(bad[0])}" does not exist. columns: ${all.join(', ')}</span>`;
    if (wc) {
      const k = wc.toLowerCase(), num = !isNaN(+wv);
      rows = rows.filter((r) => {
        const a = r[k], b = num ? +wv : wv.toLowerCase(), av = num ? +a : String(a).toLowerCase();
        return { '=': av === b, '!=': av !== b, '>': av > b, '<': av < b, '>=': av >= b, '<=': av <= b,
          like: new RegExp('^' + String(wv).toLowerCase().replace(/[.*+?^${}()[\]\\]/g, '\\$&').replace(/%/g, '.*') + '$').test(String(a).toLowerCase()) }[op.toLowerCase()];
      });
    }
    if (ob) { const k = ob.toLowerCase(), d = dir && dir.toLowerCase() === 'desc' ? -1 : 1; rows.sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0) * d); }
    if (lim) rows = rows.slice(0, +lim);
    return esc(asciiTable(rows, cols));
  }

  const files = {
    'about.txt': () => `Elia Pasqualini — Developer & Data Analyst @ Marlu.\nBorn in San Marino, 1997. MSc Computer Science & Engineering, UniBo Cesena.\nLoves travelling. Plays futsal.`,
    'contact.txt': () => `email     <a href="mailto:elia.pasqualini.97@gmail.com">elia.pasqualini.97@gmail.com</a>\ngithub    <a href="https://github.com/eliapasqualini" target="_blank" rel="noopener">github.com/eliapasqualini</a>\nlinkedin  <a href="https://www.linkedin.com/in/elia-pasqualini/" target="_blank" rel="noopener">linkedin.com/in/elia-pasqualini</a>`,
    'projects.csv': () => esc(['hash,branch,year,title', ...TABLES.projects().map((r) => `${r.hash},${r.branch},${r.year},"${r.title}"`)].join('\n')),
    'README.md': () => esc(S.readme[lang]),
  };
  const sections = ['home', 'about', 'numbers', 'projects', 'life', 'now', 'contact'];
  const scrollTo = (id) => document.getElementById(id).scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

  const commands = {
    help: () => `Available commands:\n` + [
      ['whoami', 'who is this guy?'], ['ls', 'list files'], ['cat <file>', 'print a file'],
      ['git log', 'my career, version-controlled'], ['git show <hash>', 'read a project README'],
      ['SELECT … FROM …', 'query my data (projects, stack)'],
      ['now', 'what I’m up to'], ['timeline', 'my journey, in text'], ['lang <it|en>', 'switch language'],
      ['goto <section>', 'scroll to a section'], ['contact', 'how to reach me'], ['clear', 'clear screen'], ['exit', 'close terminal'],
    ].map(([c, d]) => `  <span class="hl">${c.padEnd(18)}</span>${d}`).join('\n') + `\n\n…and a few easter eggs.`,
    whoami: () => 'elia — developer & data analyst. travels when he can, plays futsal when he can’t. 🇸🇲',
    ls: () => Object.keys(files).join('   '),
    cat: (a) => (a[0] ? (files[a[0]] ? files[a[0]]() : `<span class="err">cat: ${esc(a[0])}: No such file</span>`) : '<span class="err">usage: cat &lt;file&gt;</span>'),
    timeline: () => S.timeline.map((e) => `${e.y.padEnd(6)} ${e.t.en}${e.grade ? `  (${e.grade.join('/')})` : ''}`).join('\n'),
    now: () => S.now.items.map((n) => {
      const en = (o) => (o && typeof o === 'object' ? o.en : o || '');
      return `${n.icon}  ${n.k.en.padEnd(14)} ${esc(en(n.v))}${n.sub ? ' — ' + esc(en(n.sub)) : ''}`;
    }).join('\n') + `\n\n(updated ${S.now.updated})`,
    git: (a) => {
      if (a[0] === 'log') return S.commits.filter((c) => c.file || c.branch === 'main').map((c) => `<span style="color:${S.branches[c.branch].color}">*</span> <span class="hl">${hash(c.id)}</span> ${c.head ? '(HEAD -> ' + S.branches[c.branch].label + ') ' : ''}${c.tag ? '(tag: ' + c.tag + ') ' : ''}${esc(c.type + (c.scope ? '(' + c.scope + ')' : '') + ': ' + c.t.en)}${c.nda ? ' 🔒' : ''}`).join('\n');
      if (a[0] === 'show') {
        const c = S.commits.filter((x) => x.file || x.branch === 'main').find((x) => (a[1] && hash(x.id).startsWith(a[1])) || x.id === a[1]);
        if (!c) return `<span class="err">fatal: bad revision '${esc(a[1] || '')}'</span>`;
        const r = c.r, sec = (k) => (r[k] ? `\n## ${k}\n${esc(r[k].en)}` : '');
        return `<span class="hl">commit ${hash(c.id)}</span>  (${S.branches[c.branch].label}, ${c.year})\n\n# ${esc(c.t.en)}${c.nda ? '\n🔒 NDA — confidential company project' : ''}${sec('context')}${sec('problem')}${sec('solution')}${r.arch && r.arch.length > 1 ? '\n## architecture\n' + esc(r.arch.join(' → ')) : ''}${r.stack ? '\n## stack\n' + r.stack.map(([k, w]) => '- ' + esc(k) + ': ' + esc(w.en)).join('\n') : ''}`;
      }
      if (a[0] === 'status') return 'On branch work/marlu\nnothing to commit, working tree clean ☕';
      return 'usage: git &lt;log | show &lt;hash&gt; | status&gt;';
    },
    lang: (a) => { if (!['it', 'en'].includes(a[0])) return `current: ${lang}\nusage: lang &lt;it|en&gt;`; setLang(a[0]); return `language: ${a[0]} ✓`; },
    goto: (a) => { if (!sections.includes(a[0])) return `usage: goto &lt;${sections.join('|')}&gt;`; closeTerm(); scrollTo(a[0]); return ''; },
    contact: () => files['contact.txt'](),
    github: () => { open('https://github.com/eliapasqualini', '_blank', 'noopener'); return 'opening github…'; },
    linkedin: () => { open('https://www.linkedin.com/in/elia-pasqualini/', '_blank', 'noopener'); return 'opening linkedin…'; },
    date: () => new Date().toString(),
    echo: (a) => esc(a.join(' ')),
    history: () => hist.map((h, i) => `${String(i + 1).padStart(3)}  ${esc(h)}`).join('\n'),
    clear: () => { tBody.innerHTML = ''; return null; },
    exit: () => { closeTerm(); return null; },
    sudo: (a) => (a.join(' ') === 'make coffee' ? '☕ brewing… done. Productivity +20%.' : 'Nice try. This incident will be reported to the Captains Regent.'),
    drop: () => '<span class="err">ERROR: permission denied. Bobby Tables is not welcome here.</span>',
    goal: () => `\n    ⚽  →  →  →  ┃GOAL!┃\n`,
    rm: () => 'Nope. 🙂',
    vim: () => 'You are now stuck in vim forever. (just kidding — type exit)',
  };

  function print(html, cls = 'out') { const d = document.createElement('div'); d.className = cls; d.innerHTML = html; tBody.appendChild(d); tBody.scrollTop = tBody.scrollHeight; }
  function run(line) {
    const raw = line.trim();
    print(esc(raw), 'cmd');
    if (!raw) return;
    hist.push(raw); hIdx = hist.length;
    if (/^select\s/i.test(raw)) { print(sql(raw)); return; }
    const [cmd, ...args] = raw.split(/\s+/);
    const fn = commands[cmd.toLowerCase()];
    if (!fn) { print(`command not found: ${esc(cmd)} — try <span class="hl">help</span>`, 'err'); return; }
    const out = fn(args);
    if (out) print(out);
  }
  let termOpener = null;
  function openTerm() {
    termOpener = document.activeElement;
    term.hidden = false;
    if (!tBody.childElementCount) print(`Welcome to <span class="hl">elia-sh</span> v2.1 — type <span class="hl">help</span> to start.\nTip: <span class="hl">git log</span> · <span class="hl">SELECT title, stack FROM projects WHERE nda = 'no'</span>`);
    tInput.focus();
  }
  function closeTerm() { term.hidden = true; termOpener?.focus?.(); }

  $('#termForm').addEventListener('submit', (e) => { e.preventDefault(); run(tInput.value); tInput.value = ''; });
  tInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') { e.preventDefault(); if (hIdx > 0) tInput.value = hist[--hIdx]; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); hIdx = Math.min(hist.length, hIdx + 1); tInput.value = hist[hIdx] || ''; }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const parts = tInput.value.split(' ');
      const pool = parts.length === 1 ? Object.keys(commands)
        : parts[0] === 'cat' ? Object.keys(files) : parts[0] === 'goto' ? sections
        : parts[0] === 'git' ? ['log', 'show', 'status'] : parts[0] === 'lang' ? ['it', 'en']
        : /from$/i.test(parts[parts.length - 2] || '') ? Object.keys(TABLES) : [];
      const last = parts[parts.length - 1];
      const m = pool.filter((c) => c.startsWith(last));
      if (m.length === 1) { parts[parts.length - 1] = m[0]; tInput.value = parts.join(' ') + (parts.length === 1 ? ' ' : ''); }
      else if (m.length > 1) print(m.join('   '));
    } else if (e.key === 'Escape') closeTerm();
  });
  term.addEventListener('click', (e) => {
    if (e.target === term || e.target.closest('[data-close-term]')) closeTerm();
    else if (!getSelection().toString()) tInput.focus();
  });

  /* ================= EVENTS ================= */
  document.addEventListener('click', (e) => {
    if (e.target.closest('#termBtn')) { openTerm(); return; }
    const gChip = e.target.closest('#galFilters .chip');
    if (gChip) { galFilter = gChip.dataset.g; renderGallery(); return; }
    const shot = e.target.closest('.shot');
    if (shot) { openLightbox(+shot.dataset.i, galVisible().map((g) => ({ photo: g.photo, cap: `${L(g.c)} · ${g.d}` }))); return; }
    const nav = e.target.closest('.lb-nav');
    if (nav) { openLightbox(lbIndex + (nav.classList.contains('next') ? 1 : -1)); return; }
    if (e.target.closest('#lightbox')) { $('#lightbox').hidden = true; return; }
    const rb = e.target.closest('[data-readme]');
    if (rb) { readmeView = rb.dataset.readme; renderReadme(); return; }
    const fo = e.target.closest('[data-folder]');
    if (fo) { folderOpen[fo.dataset.folder] = !folderOpen[fo.dataset.folder]; renderProjects(); $(`[data-folder="${fo.dataset.folder}"]`).focus(); return; }
    const pf = e.target.closest('[data-proj]');
    if (pf) { selectProject(pf.dataset.proj); return; }
  });

  $('#projEx').addEventListener('keydown', (e) => {
    const f = e.target.closest('[data-proj]');
    if (!f || !['ArrowDown', 'ArrowUp'].includes(e.key)) return;
    e.preventDefault();
    const visible = $$('#projEx [data-proj]').map((b) => b.dataset.proj);
    const i = visible.indexOf(f.dataset.proj) + (e.key === 'ArrowDown' ? 1 : -1);
    if (visible[i]) selectProject(visible[i], { focus: true });
  });
  $('#langBtn').addEventListener('click', () => setLang(lang === 'it' ? 'en' : 'it'));
  $('#mailBtn').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText('elia.pasqualini.97@gmail.com'); toast(t('copied')); }
    catch { location.href = 'mailto:elia.pasqualini.97@gmail.com'; }
  });
  let toastTimer;
  function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 1800); }

  document.addEventListener('keydown', (e) => {
    const typing = e.target.closest('input, textarea, [contenteditable]');
    if ((e.key === '`' || e.key === '\\') && !typing) { e.preventDefault(); term.hidden ? openTerm() : closeTerm(); return; }
    if (!$('#lightbox').hidden) {
      if (e.key === 'Escape') $('#lightbox').hidden = true;
      if (e.key === 'ArrowRight') openLightbox(lbIndex + 1);
      if (e.key === 'ArrowLeft') openLightbox(lbIndex - 1);
    }
  });

  /* ================= INIT ================= */
  $('#year').textContent = new Date().getFullYear();
  renderText(); renderReadme(); renderNumbers(); renderProjects(); renderGallery(); renderNow();
  observeReveal();
  typeCode();
})();
