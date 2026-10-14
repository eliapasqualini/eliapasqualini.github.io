/* All site content lives here. Entries with `ex: true` (or {{ex}} in text) are placeholders. */
window.SITE = {
  i18n: {
    it: {
      banner: 'Prototipo · i contenuti marcati "esempio" sono segnaposto da sostituire',
      'nav.about': 'README', 'nav.timeline': 'In numeri', 'nav.projects': 'Progetti', 'nav.life': 'Viaggi & vita', 'nav.now': 'Adesso', 'nav.contact': 'Contatti',
      'hero.lead': 'Scrivo software e trasformo dati in decisioni. Da San Marino, la Repubblica più antica del mondo.',
      'cta.projects': 'Progetti', 'cta.life': 'Viaggi & vita',
      'about.title': 'README.md', 'about.preview': 'Anteprima', 'about.code': 'Codice',
      'nb.title': 'Elia in numeri', 'nb.lead': 'La mia storia, raccontata come la racconterebbe un data analyst: con una dashboard. Dati aggiornati in tempo reale, precisione variabile.', 'nb.source': 'Fonte: memoria di Elia · affidabilità: buona',
      'proj.title': 'Progetti',
      'proj.lead': 'Apri un file per leggere il progetto. I progetti in Marlu sono coperti da NDA: ne racconto il problema, l’approccio e le tecnologie, non il codice né i dati. Quelli pubblici hanno il link a GitHub ↗.',
      'proj.explorer': 'EXPLORER · PROGETTI', 'proj.root': 'progetti',
      'proj.context': 'Contesto', 'proj.problem': 'Problema', 'proj.solution': 'Cosa ho fatto', 'proj.arch': 'Architettura', 'proj.stack': 'Stack', 'proj.outcome': 'Risultato',
      'proj.nda': 'Progetto aziendale riservato (NDA): codice, dati e cliente non sono divulgabili. Descrivo solo approccio e tecnologie.',
      'proj.repo': 'Vedi su GitHub',
      'life.title': 'Viaggi & vita',
      'life.lead': 'Quello che c’è oltre lo schermo: viaggi, persone e momenti che mi porto dietro.',
            'life.moments': 'Momenti', 'life.all': 'Tutto', 'life.travel': 'Viaggi', 'life.milestones': 'Traguardi', 'life.sport': 'Sport', 'life.people': 'Persone',
      'now.title': 'Adesso', 'now.lead': 'Cosa mi tiene occupato in questo periodo.', 'now.updated': 'Aggiornato a',
      'contact.title': 'Contatti', 'contact.lead': 'Hai un’idea e vuoi costruire qualcosa insieme? Scrivimi.', 'contact.copy': 'clicca per copiare',
      'footer.hint': 'Premi <kbd>\\</kbd> o <kbd>`</kbd> per aprire il terminale', example: 'esempio',
      copied: 'Email copiata ✓',
    },
    en: {
      banner: 'Prototype · content marked "example" is placeholder',
      'nav.about': 'README', 'nav.timeline': 'By the numbers', 'nav.projects': 'Projects', 'nav.life': 'Travel & life', 'nav.now': 'Now', 'nav.contact': 'Contact',
      'hero.lead': 'I write software and turn data into decisions. From San Marino, the oldest republic in the world.',
      'cta.projects': 'Projects', 'cta.life': 'Travel & life',
      'about.title': 'README.md', 'about.preview': 'Preview', 'about.code': 'Code',
      'nb.title': 'Elia by the numbers', 'nb.lead': 'My story, told the way a data analyst would tell it: as a dashboard. Real-time data, variable precision.', 'nb.source': 'Source: Elia’s memory · reliability: good',
      'proj.title': 'Projects',
      'proj.lead': 'Open a file to read about the project. Marlu projects are under NDA: I describe the problem, the approach and the technologies, not the code or the data. Public ones link to GitHub ↗.',
      'proj.explorer': 'EXPLORER · PROJECTS', 'proj.root': 'projects',
      'proj.context': 'Context', 'proj.problem': 'Problem', 'proj.solution': 'What I did', 'proj.arch': 'Architecture', 'proj.stack': 'Stack', 'proj.outcome': 'Outcome',
      'proj.nda': 'Confidential company project (NDA): code, data and client cannot be disclosed. I only describe the approach and the technologies.',
      'proj.repo': 'View on GitHub',
      'life.title': 'Travel & life',
      'life.lead': 'What lies beyond the screen: trips, people and moments I carry with me.',
            'life.moments': 'Moments', 'life.all': 'All', 'life.travel': 'Travel', 'life.milestones': 'Milestones', 'life.sport': 'Sport', 'life.people': 'People',
      'now.title': 'Now', 'now.lead': 'What’s keeping me busy these days.', 'now.updated': 'Updated',
      'contact.title': 'Contact', 'contact.lead': 'Got an idea and want to build something together? Drop me a line.', 'contact.copy': 'click to copy',
      'footer.hint': 'Press <kbd>`</kbd> or <kbd>\\</kbd> to open the terminal', example: 'example',
      copied: 'Email copied ✓',
    },
  },

  /* ---------- 01 · README.md (markdown subset: #, ##, >, -, **, `code`, [link](url), {{ex}}) ---------- */
  readme: {
    it: `# Elia Pasqualini
> Data Platform Lead @ Marlu · San Marino 🇸🇲

Mi piace capire come funzionano le cose e poi renderle più semplici. Oggi guido la piattaforma dati di Marlu: dal gestionale al report, tutto quello che riguarda i dati passa dalla mia scrivania.

## 🛠️ Cosa faccio
- Progetto e sviluppo **integrazioni ERP** tra il gestionale e gli altri sistemi aziendali
- Seguo tutta l'area **Business Intelligence**: modelli dati, data warehouse, dashboard
- Trasformo domande di business in **numeri affidabili** su cui prendere decisioni
- **Automatizzo** i processi ripetitivi: se lo faccio due volte, lo scrivo in codice

## 🧭 Come lavoro {{ex}}
- Prima capisco il problema, poi scelgo lo strumento
- Codice leggibile > codice furbo
- Un buon report risponde a una domanda, non a dieci

## 🎓 Formazione
- Laurea magistrale in Ingegneria e Scienze Informatiche · UniBo Cesena · \`102/110\`
- Laurea triennale · stesso corso · \`98/110\`
- Diploma ITIS “Leonardo da Vinci”, Rimini · \`98/100\`
- Tirocini in **Mr.Apps!** (app mobile native) e **Botika** (piattaforma blockchain su Stellar)

## 🌍 Fuori dal lavoro
Viaggio appena posso, gioco a futsal e mi perdo volentieri in [Viaggi & vita](#life).

## 📫 Contatti
Scrivimi a [elia.pasqualini.97@gmail.com](mailto:elia.pasqualini.97@gmail.com) o trovami su [LinkedIn](https://www.linkedin.com/in/elia-pasqualini/).`,
    en: `# Elia Pasqualini
> Data Platform Lead @ Marlu · San Marino 🇸🇲

I like understanding how things work and then making them simpler. Today I lead Marlu's data platform: from the ERP to the report, everything data goes through my desk.

## 🛠️ What I do
- Design and build **ERP integrations** between the company ERP and other systems
- Own the whole **Business Intelligence** area: data models, data warehouse, dashboards
- Turn business questions into **reliable numbers** people can decide on
- **Automate** repetitive work: if I do it twice, I write code for it

## 🧭 How I work {{ex}}
- Understand the problem first, then pick the tool
- Readable code > clever code
- A good report answers one question, not ten

## 🎓 Education
- MSc Computer Science & Engineering · UniBo Cesena · \`102/110\`
- BSc · same programme · \`98/110\`
- High school diploma, ITIS “Leonardo da Vinci”, Rimini · \`98/100\`
- Internships at **Mr.Apps!** (native mobile apps) and **Botika** (blockchain platform on Stellar)

## 🌍 Off the clock
I travel whenever I can, play futsal and happily get lost in [Travel & life](#life).

## 📫 Contact
Write to [elia.pasqualini.97@gmail.com](mailto:elia.pasqualini.97@gmail.com) or find me on [LinkedIn](https://www.linkedin.com/in/elia-pasqualini/).`,
  },

  // `ex: true` = year or details still to confirm
  timeline: [
    { y: '1997', cat: 'life', t: { it: 'Nato a San Marino', en: 'Born in San Marino' }, s: { it: '2 giugno', en: 'June 2nd' },
      d: { it: 'Nella Repubblica più antica del mondo.', en: 'In the oldest republic in the world.' } },
    { y: '2016', cat: 'study', t: { it: 'Diploma di perito informatico', en: 'High school diploma, Computer Science' }, s: { it: 'ITIS “Leonardo da Vinci”, Rimini', en: 'ITIS “Leonardo da Vinci”, Rimini' },
      d: { it: 'Dove è iniziato tutto: primi programmi, prime reti.', en: 'Where it all started: first programs, first networks.' }, grade: [98, 100] },
    { y: '20??', cat: 'work', ex: true, t: { it: 'Pizza delivery & ripetizioni di informatica', en: 'Pizza delivery & computer science tutoring' }, s: { it: 'Lavori durante gli studi', en: 'Jobs while studying' },
      d: { it: 'Consegne la sera, ripetizioni il pomeriggio: ho imparato a spiegare le cose difficili in modo semplice (e a trovare qualsiasi indirizzo).', en: 'Deliveries at night, tutoring in the afternoon: I learned to explain hard things simply (and to find any address).' } },
    { y: '2019?', cat: 'work', ex: true, t: { it: 'Tirocinio in Mr.Apps!', en: 'Internship at Mr.Apps!' }, s: { it: 'Sviluppo nativo di app mobile', en: 'Native mobile app development' },
      d: { it: 'Il primo contatto con un team di sviluppo vero: app native, rilasci, feedback degli utenti.', en: 'My first real dev team: native apps, releases, user feedback.' } },
    { y: '2019', cat: 'study', t: { it: 'Laurea triennale', en: 'Bachelor’s degree' }, s: { it: 'Ingegneria e Scienze Informatiche · UniBo Cesena', en: 'Computer Science & Engineering · UniBo Cesena' },
      d: { it: 'Dicembre 2019.', en: 'December 2019.' }, grade: [98, 110] },
    { y: '2021?', cat: 'work', ex: true, t: { it: 'Tirocinio in Botika', en: 'Internship at Botika' }, s: { it: 'Piattaforma basata su blockchain Stellar', en: 'Platform built on the Stellar blockchain' },
      d: { it: 'Smart contract, transazioni e asset digitali sulla rete Stellar.', en: 'Smart contracts, transactions and digital assets on the Stellar network.' } },
    { y: '2022', cat: 'study', t: { it: 'Laurea magistrale', en: 'Master’s degree' }, s: { it: 'Ingegneria e Scienze Informatiche · UniBo Cesena', en: 'Computer Science & Engineering · UniBo Cesena' },
      d: { it: 'Tesi: titolo da inserire.', en: 'Thesis: title to be added.' }, grade: [102, 110] },
    { y: '2022', cat: 'work', t: { it: 'Developer & Data Analyst', en: 'Developer & Data Analyst' }, s: { it: 'Marlu', en: 'Marlu' },
      d: { it: 'Dal giorno dopo la laurea: integrazioni ERP, sviluppo e analisi dati.', en: 'From the day after graduation: ERP integrations, development and data analysis.' } },
    { y: '20??', cat: 'work', ex: true, t: { it: 'Data Platform Lead', en: 'Data Platform Lead' }, s: { it: 'Marlu', en: 'Marlu' },
      d: { it: 'Responsabile della piattaforma dati: progettazione delle integrazioni ERP e tutta l’area di analisi dati e Business Intelligence.', en: 'In charge of the data platform: ERP integration design and the whole data analysis & Business Intelligence area.' } },
    { y: '∞', cat: 'life', t: { it: 'Futsal', en: 'Futsal' }, s: { it: 'Nazionale e club', en: 'National team and club' },
      d: { it: 'La mia valvola di sfogo, da sempre.', en: 'My way to unplug, always has been.' } },
  ],

  /* ---------- 02 · Elia in numeri ----------
     Tile types: kpi | gauge | uptime | countdown | bars.
     `value` starting with "=" is computed from the rest of the data (see METRICS in app.js).
     `ex: true` = placeholder number to replace. */
  numbers: {
    birth: '1997-06-02',
    groups: [
      { icon: '🐣', t: { it: 'Nascita', en: 'Birth' }, s: { it: 'Messo in produzione il 2 giugno 1997, San Marino.', en: 'Deployed to production on June 2nd 1997, San Marino.' },
        tiles: [
          { type: 'uptime', wide: true, l: { it: 'Uptime', en: 'Uptime' }, n: { it: 'Nessun downtime registrato. Qualche rallentamento il lunedì mattina.', en: 'No downtime recorded. Some latency on Monday mornings.' } },
          { type: 'kpi', value: '=age', prefix: 'v', l: { it: 'Versione attuale', en: 'Current version' }, n: { it: 'Aggiornamento automatico ogni 2 giugno.', en: 'Auto-updates every June 2nd.' } },
          { type: 'kpi', value: '1:33.000', l: { it: 'Rarità', en: 'Rarity' }, n: { it: 'San Marino conta circa 33.000 abitanti su 61 km². Edizione limitata.', en: 'San Marino has about 33,000 people on 61 km². Limited edition.' } },
        ] },
      { icon: '🎓', t: { it: 'Studi', en: 'Education' }, s: { it: 'Dall’ITIS di Rimini a Ingegneria a Cesena.', en: 'From ITIS Rimini to Engineering in Cesena.' },
        tiles: [
          { type: 'gauge', value: 98, max: 100, l: { it: 'Diploma ITIS · 2016', en: 'High school · 2016' }, n: { it: '2 punti lasciati per strada.', en: '2 points left on the road.' } },
          { type: 'gauge', value: 98, max: 110, l: { it: 'Laurea triennale · 2019', en: 'Bachelor’s · 2019' }, n: { it: 'Il 110 quel giorno era impegnato.', en: 'The 110 was busy that day.' } },
          { type: 'gauge', value: 102, max: 110, l: { it: 'Laurea magistrale · 2022', en: 'Master’s · 2022' }, n: { it: '+4 rispetto alla triennale: trend positivo.', en: '+4 vs the bachelor’s: positive trend.' } },
          { type: 'kpi', value: 18, l: { it: 'Anni sui banchi', en: 'Years at a desk' }, n: { it: 'Elementari incluse, ricreazione esclusa.', en: 'Primary school included, breaks excluded.' } },
          { type: 'kpi', value: 2, l: { it: 'Tirocini', en: 'Internships' }, n: { it: 'Mr.Apps! (app mobile) e Botika (blockchain Stellar).', en: 'Mr.Apps! (mobile apps) and Botika (Stellar blockchain).' } },
        ] },
      { icon: '⚽', t: { it: 'Futsal', en: 'Futsal' }, s: { it: 'Il debug migliore si fa correndo.', en: 'The best debugging happens while running.' },
        tiles: [
          { type: 'kpi', value: 12, l: { it: 'Stagioni', en: 'Seasons' }, n: { it: 'Tra Nazionale e club. Ginocchia ancora in garanzia.', en: 'Between national team and club. Knees still under warranty.' } },
          { type: 'kpi', size: 'sm', value: { it: 'log₁₀(⚽) ≈ 3,7', en: 'log₁₀(⚽) ≈ 3.7' }, l: { it: 'Gol', en: 'Goals' }, n: { it: 'Fonte: il marcatore. Verifica indipendente non disponibile.', en: 'Source: the scorer. No independent verification available.' } },
        ] },
      { icon: '💻', t: { it: 'Progetti', en: 'Projects' }, s: { it: 'Dati, integrazioni e qualche gioco multiplayer.', en: 'Data, integrations and the odd multiplayer game.' },
        tiles: [
          { type: 'kpi', value: '=projects', l: { it: 'Progetti nel portfolio', en: 'Projects in the portfolio' }, n: { it: 'Contati con una query, ovviamente.', en: 'Counted with a query, obviously.' } },
          { type: 'kpi', value: '=nda', l: { it: 'Sotto NDA', en: 'Under NDA' }, n: { it: 'Potrei dirti di più, ma poi dovrei… no, non posso proprio.', en: 'I could tell you more, but then I’d have to… no, I really can’t.' } },
          { type: 'kpi', value: '=public', l: { it: 'Con codice su GitHub', en: 'With code on GitHub' }, n: { it: 'Gli unici che puoi giudicare riga per riga.', en: 'The only ones you can judge line by line.' } },
          { type: 'bars', wide: true, l: { it: 'Tecnologie più usate', en: 'Most used technologies' }, n: { it: 'SELECT tech, COUNT(*) FROM projects GROUP BY tech ORDER BY 2 DESC LIMIT 6;', en: 'SELECT tech, COUNT(*) FROM projects GROUP BY tech ORDER BY 2 DESC LIMIT 6;' } },
          { type: 'kpi', value: '∞', l: { it: 'Caffè', en: 'Coffees' }, n: { it: 'Unità di misura non standard.', en: 'Non-standard unit of measure.' } },
        ] },
      { icon: '📸', t: { it: 'Momenti', en: 'Moments' }, s: { it: 'Tutto quello che non sta in un commit.', en: 'Everything that doesn’t fit in a commit.' },
        tiles: [
          { type: 'kpi', value: '=photos', l: { it: 'Foto in galleria', en: 'Photos in the gallery' }, n: { it: 'Le altre sono nel rullino, in attesa di revisione.', en: 'The rest are in the camera roll, pending review.' } },
          { type: 'countdown', to: '2027-10', l: { it: 'Al Giappone', en: 'Until Japan' }, n: { it: 'Valigia: non ancora pronta.', en: 'Suitcase: not ready yet.' } },
        ] },
    ],
  },

  /* ---------- 03 · Projects (shown as a file explorer; also used by the terminal's git commands) ---------- */
  scopes: {
    web: { it: 'Web', en: 'Web' }, bi: { it: 'Data & BI', en: 'Data & BI' }, data: { it: 'Data & BI', en: 'Data & BI' },
    automation: { it: 'Automazione', en: 'Automation' }, erp: { it: 'ERP & integrazioni', en: 'ERP & integrations' },
    thesis: { it: 'Tesi', en: 'Thesis' }, blockchain: { it: 'Blockchain', en: 'Blockchain' }, game: { it: 'Game dev', en: 'Game dev' },
    db: { it: 'Database', en: 'Database' }, mobile: { it: 'Mobile', en: 'Mobile' }, role: { it: 'Ruolo', en: 'Role' },
  },
  branches: {
    main: { label: 'main', color: '#e6edf3' },
    uni: { label: 'uni', color: '#a78bfa' },
    work: { label: 'work/marlu', color: '#00b2ff' },
    personal: { label: 'personal', color: '#7ee787' },
  },
  // Newest first, exactly as `git log` prints. Branch lanes: `fork` = main commit id it starts from, `merge` = main commit id it merges into.
  lanes: { uni: { fork: 'm-diploma', merge: 'm-msc' }, work: { fork: 'm-marlu' }, personal: { fork: 'm-marlu' } },
  commits: [
    { id: 'site', file: 'portfolio', branch: 'personal', type: 'feat', scope: 'web', year: 2026, head: true,
      t: { it: 'nuovo portfolio interattivo', en: 'new interactive portfolio' },
      link: 'https://github.com/eliapasqualini/eliapasqualini.github.io',
      r: {
        context: { it: 'Il mio vecchio sito era una pagina statica con Bootstrap e quattro foto.', en: 'My old site was a static Bootstrap page with four photos.' },
        problem: { it: 'Raccontare chi sono in modo interattivo, senza framework e senza mostrare codice riservato.', en: 'Tell who I am interactively, with no frameworks and without exposing confidential code.' },
        solution: { it: 'Single page in HTML/CSS/JS puro: terminale con query SQL sui miei dati, progetti come `git log`, mappa dei viaggi.', en: 'Plain HTML/CSS/JS single page: a terminal with SQL queries over my data, projects as `git log`, a travel map.' },
        arch: ['data.js', 'Render JS', 'HTML/CSS', 'GitHub Pages'],
        stack: [['JavaScript', { it: 'rendering, terminale, parser SQL', en: 'rendering, terminal, SQL parser' }], ['D3.js', { it: 'proiezione e zoom della mappa', en: 'map projection and zoom' }], ['sharp', { it: 'compressione delle foto in WebP', en: 'photo compression to WebP' }]],
      } },
    { id: 'portal', file: 'portale-interno', branch: 'work', type: 'feat', scope: 'web', year: 2025, nda: true, ex: true,
      t: { it: 'portale interno per ordini e documenti', en: 'internal portal for orders and documents' },
      r: {
        context: { it: 'Più reparti avevano bisogno di consultare ordini e documenti senza accedere al gestionale.', en: 'Several departments needed to browse orders and documents without ERP access.' },
        problem: { it: 'Dati sparsi e accessi limitati rallentavano le risposte ai clienti.', en: 'Scattered data and limited access slowed down customer replies.' },
        solution: { it: 'Una web app leggera che legge dal gestionale tramite API e mostra solo ciò che serve a ogni ruolo.', en: 'A lightweight web app reading from the ERP via API, showing each role only what it needs.' },
        arch: ['ERP', 'API REST', 'Web app', 'Utenti interni'],
        stack: [['JavaScript', { it: 'interfaccia', en: 'front-end' }], ['API REST', { it: 'accesso ai dati del gestionale', en: 'ERP data access' }], ['SQL', { it: 'viste ottimizzate per le ricerche', en: 'views optimised for search' }]],
        outcome: { it: 'Meno richieste interne, risposte ai clienti più rapide.', en: 'Fewer internal requests, faster customer replies.' },
      } },
    { id: 'prod', file: 'report-produzione', branch: 'work', type: 'feat', scope: 'bi', year: 2025, nda: true, ex: true,
      t: { it: 'report di produzione per reparto', en: 'production report by department' },
      r: {
        problem: { it: 'Efficienza e scarti venivano calcolati a mano a fine mese.', en: 'Efficiency and scrap were computed by hand at month end.' },
        solution: { it: 'Modello dati sui dati di produzione e report con drill-down per reparto e macchina.', en: 'Data model over production data and a report with drill-down by department and machine.' },
        arch: ['Gestionale', 'SQL', 'Modello Power BI', 'Report'],
        stack: [['Power BI', { it: 'report e modello semantico', en: 'report and semantic model' }], ['DAX', { it: 'misure di efficienza', en: 'efficiency measures' }], ['SQL', { it: 'estrazione e pulizia', en: 'extraction and cleaning' }]],
      } },
    { id: 'lead', branch: 'work', type: 'feat', scope: 'role', year: 2024, yq: true, tag: 'lead',
      t: { it: 'promosso a Data Platform Lead', en: 'promoted to Data Platform Lead' },
      r: {
        context: { it: 'Da developer e data analyst a responsabile della piattaforma dati di Marlu.', en: 'From developer and data analyst to owner of Marlu’s data platform.' },
        solution: { it: 'Oggi progetto le integrazioni ERP e seguo tutta l’area di analisi dati e Business Intelligence, dalla sorgente al report.', en: 'Today I design ERP integrations and own the whole data analysis & Business Intelligence area, from source to report.' },
        arch: ['ERP', 'Integrazioni', 'Data platform', 'BI'],
      } },
    { id: 'dwh', file: 'data-warehouse', branch: 'work', type: 'feat', scope: 'data', year: 2024, nda: true, ex: true,
      t: { it: 'data warehouse vendite', en: 'sales data warehouse' },
      r: {
        problem: { it: 'Ogni report interrogava direttamente il gestionale, con tempi lunghi e numeri diversi tra un report e l’altro.', en: 'Every report queried the ERP directly: slow, and numbers differed between reports.' },
        solution: { it: 'Schema a stella con storico e caricamento incrementale notturno: un’unica fonte di verità.', en: 'Star schema with history and nightly incremental load: a single source of truth.' },
        arch: ['ERP', 'ETL', 'Data warehouse', 'Report'],
        stack: [['SQL', { it: 'modellazione e procedure di caricamento', en: 'modelling and load procedures' }], ['Python', { it: 'orchestrazione e controlli di qualità', en: 'orchestration and quality checks' }]],
      } },
    { id: 'auto', file: 'report-automatici', branch: 'work', type: 'perf', scope: 'automation', year: 2024, nda: true, ex: true,
      t: { it: 'report mensili automatici', en: 'automated monthly reports' },
      r: {
        problem: { it: 'Mezza giornata al mese di copia-incolla tra fogli Excel.', en: 'Half a day a month of copy-pasting between spreadsheets.' },
        solution: { it: 'Script che estrae, elabora e impagina i dati: ora basta un click.', en: 'A script that extracts, processes and formats the data: now it takes one click.' },
        arch: ['Database', 'Python', 'Excel'],
        stack: [['Python', { it: 'estrazione ed elaborazione', en: 'extraction and processing' }], ['Excel', { it: 'output per gli utenti finali', en: 'output for end users' }]],
      } },
    { id: 'kpi', file: 'dashboard-kpi', branch: 'work', type: 'feat', scope: 'bi', year: 2023, nda: true, ex: true,
      t: { it: 'dashboard KPI commerciale', en: 'sales KPI dashboard' },
      r: {
        problem: { it: 'La direzione non aveva una vista unica su vendite, margini e agenti.', en: 'Management had no single view of sales, margins and agents.' },
        solution: { it: 'Cruscotto con refresh notturno e drill-through fino al singolo cliente.', en: 'Dashboard with nightly refresh and drill-through down to each customer.' },
        arch: ['ERP', 'SQL', 'Power BI', 'Direzione'],
        stack: [['Power BI', { it: 'visualizzazione e sicurezza a livello di riga', en: 'visuals and row-level security' }], ['DAX', { it: 'KPI e confronti anno su anno', en: 'KPIs and year-over-year comparisons' }], ['SQL', { it: 'viste sorgente', en: 'source views' }]],
      } },
    { id: 'ecom', file: 'integrazione-ecommerce', branch: 'work', type: 'feat', scope: 'erp', year: 2023, nda: true, ex: true,
      t: { it: 'integrazione gestionale ↔ e-commerce', en: 'ERP ↔ e-commerce integration' },
      r: {
        problem: { it: 'Articoli, giacenze e ordini venivano allineati a mano tra due sistemi.', en: 'Items, stock and orders were synced by hand between two systems.' },
        solution: { it: 'Servizio di sincronizzazione bidirezionale con log degli errori e ritentativi.', en: 'Two-way sync service with error logging and retries.' },
        arch: ['ERP', 'Servizio di sync', 'API e-commerce'],
        stack: [['C#', { it: 'servizio di integrazione', en: 'integration service' }], ['API REST', { it: 'comunicazione con la piattaforma', en: 'platform communication' }], ['SQL', { it: 'tabelle di appoggio e log', en: 'staging tables and logs' }]],
      } },
    { id: 'custom', file: 'personalizzazioni-erp', branch: 'work', type: 'feat', scope: 'erp', year: 2022, nda: true, ex: true,
      t: { it: 'personalizzazioni del gestionale', en: 'ERP customisations' },
      r: {
        problem: { it: 'Processi aziendali specifici non coperti dalle funzioni standard.', en: 'Company-specific processes not covered by standard features.' },
        solution: { it: 'Estensioni, stampe e report su misura integrati nel gestionale.', en: 'Custom extensions, printouts and reports built into the ERP.' },
        arch: ['Utente', 'ERP', 'Database'],
        stack: [['ERP', { it: 'ambiente di sviluppo del gestionale', en: 'ERP development environment' }], ['SQL', { it: 'query e viste', en: 'queries and views' }]],
      } },
    { id: 'm-marlu', branch: 'main', type: 'feat', year: 2022, tag: 'marlu',
      t: { it: 'primo giorno in Marlu 🚀', en: 'first day at Marlu 🚀' },
      r: { context: { it: 'Il giorno dopo la laurea magistrale ho iniziato come developer e data analyst.', en: 'The day after my master’s degree I started as a developer and data analyst.' } } },
    { id: 'm-msc', branch: 'main', type: 'merge', year: 2022, tag: 'v3.0',
      t: { it: 'laurea magistrale (102/110)', en: 'master’s degree (102/110)' },
      r: { context: { it: 'Ingegneria e Scienze Informatiche, Università di Bologna, Campus di Cesena.', en: 'Computer Science & Engineering, University of Bologna, Cesena Campus.' } } },
    { id: 'msc-thesis', branch: 'uni', type: 'docs', scope: 'thesis', year: 2022, ex: true,
      t: { it: 'tesi magistrale', en: 'master’s thesis' },
      r: {
        context: { it: 'Titolo, relatore e argomento da inserire.', en: 'Title, supervisor and topic to be added.' },
        arch: ['?'],
        stack: [['Python', { it: 'da confermare', en: 'to be confirmed' }]],
      } },
    { id: 'botika', branch: 'uni', type: 'feat', scope: 'blockchain', year: 2021, yq: true,
      t: { it: 'tirocinio in Botika · piattaforma blockchain', en: 'Botika internship · blockchain platform' },
      r: {
        context: { it: 'Tirocinio in Botika su una piattaforma basata sulla blockchain Stellar.', en: 'Internship at Botika on a platform built on the Stellar blockchain.' },
        solution: { it: 'Dettagli del lavoro svolto da inserire.', en: 'Details of the work to be added.' },
        stack: [['Stellar', { it: 'rete blockchain e asset digitali', en: 'blockchain network and digital assets' }]],
      } },
    { id: 'amongsus', file: 'amongsus', branch: 'uni', type: 'feat', scope: 'game', year: 2021,
      t: { it: 'AmongSus · gioco multiplayer in Scala', en: 'AmongSus · multiplayer game in Scala' },
      link: 'https://github.com/OlegKonchenkov/PPS-AmongSus-Konchenkov-Pasqualini-Poggi',
      r: {
        context: { it: 'Progetto di gruppo (3 persone) per il corso di Paradigmi di Programmazione e Sviluppo.', en: 'Team project (3 people) for the Programming Paradigms & Development course.' },
        problem: { it: 'Ricreare un gioco di deduzione sociale online, ispirato ad Among Us, per fino a dieci giocatori.', en: 'Recreate an online social-deduction game inspired by Among Us, for up to ten players.' },
        solution: { it: 'Architettura client-server in Scala, logica di gioco in parte dichiarativa in Prolog, build e test automatizzati.', en: 'Client-server architecture in Scala, partly declarative game logic in Prolog, automated build and tests.' },
        arch: ['Client', 'Server', 'Game logic'],
        stack: [['Scala', { it: 'client, server e logica di gioco', en: 'client, server and game logic' }], ['Prolog', { it: 'regole di gioco', en: 'game rules' }], ['sbt', { it: 'build e packaging', en: 'build and packaging' }]],
      } },
    { id: 'dbfanta', branch: 'uni', type: 'feat', scope: 'db', year: 2020,
      t: { it: 'DBFanta · database per il fantacalcio', en: 'DBFanta · fantasy football database' },
      link: 'https://github.com/eliapasqualini/DBFanta',
      r: {
        context: { it: 'Progetto per il corso di Basi di Dati.', en: 'Project for the Databases course.' },
        solution: { it: 'Progettazione di un database relazionale per gestire un fantacalcio e applicazione Java per usarlo. {{ex}}', en: 'Design of a relational database to run a fantasy football league, plus a Java app on top. {{ex}}' },
        arch: ['App Java', 'JDBC', 'Database'],
        stack: [['Java', { it: 'applicazione', en: 'application' }], ['SQL', { it: 'modello relazionale e query', en: 'relational model and queries' }]],
      } },
    { id: 'm-bsc', branch: 'main', type: 'release', year: 2019, tag: 'v2.0',
      t: { it: 'laurea triennale (98/110)', en: 'bachelor’s degree (98/110)' },
      r: { context: { it: 'Dicembre 2019, Campus di Cesena.', en: 'December 2019, Cesena Campus.' } } },
    { id: 'bsc-thesis', branch: 'uni', type: 'docs', scope: 'thesis', year: 2019, ex: true,
      t: { it: 'tesi triennale', en: 'bachelor’s thesis' },
      r: { context: { it: 'Titolo e argomento da inserire.', en: 'Title and topic to be added.' }, stack: [['Java', { it: 'da confermare', en: 'to be confirmed' }]] } },
    { id: 'mrapps', branch: 'uni', type: 'feat', scope: 'mobile', year: 2019, yq: true,
      t: { it: 'tirocinio in Mr.Apps! · app mobile native', en: 'Mr.Apps! internship · native mobile apps' },
      r: {
        context: { it: 'Tirocinio in Mr.Apps! nello sviluppo nativo di applicazioni mobile.', en: 'Internship at Mr.Apps! in native mobile app development.' },
        solution: { it: 'Dettagli del lavoro svolto da inserire.', en: 'Details of the work to be added.' },
        stack: [['Android / iOS', { it: 'sviluppo nativo (da confermare)', en: 'native development (to be confirmed)' }]],
      } },
    { id: 'm-diploma', branch: 'main', type: 'release', year: 2016, tag: 'v1.0',
      t: { it: 'diploma ITIS (98/100)', en: 'high school diploma (98/100)' },
      r: { context: { it: 'ITIS “Leonardo da Vinci”, Rimini: dove è iniziato tutto.', en: 'ITIS “Leonardo da Vinci”, Rimini: where it all started.' } } },
    { id: 'm-init', branch: 'main', type: 'init', year: 1997,
      t: { it: 'hello, world 🇸🇲', en: 'hello, world 🇸🇲' },
      r: { context: { it: 'San Marino, 2 giugno 1997.', en: 'San Marino, June 2nd 1997.' } } },
  ],

  /* ---------- 05 · Now ---------- */
  now: {
    updated: '2026-10',
    // Optional per item: cover (image in /img), logo (icon in /img), sub (second line), spotify (track id), countdown ('YYYY-MM')
    items: [
      { icon: '📖', k: { it: 'Sto leggendo', en: 'Reading' }, v: { it: 'Un giorno questo dolore ti sarà utile', en: 'Someday This Pain Will Be Useful to You' },
        sub: 'Peter Cameron', cover: 'now-libro.webp' },
      { icon: '🧠', logo: 'now-fabric.svg', k: { it: 'Sto imparando', en: 'Learning' }, v: 'Microsoft Fabric',
        sub: { it: 'La piattaforma dati unificata di Microsoft', en: 'Microsoft’s unified data platform' } },
      { icon: '🎧', k: { it: 'Sto ascoltando', en: 'Listening to' }, v: 'DEDICA', sub: 'Ernia', spotify: '5ETMm9vLDEK6rvuSH6OUK0' },
      { icon: '✈️', k: { it: 'Sto pianificando', en: 'Planning' }, v: { it: 'Giappone', en: 'Japan' },
        sub: { it: 'Ottobre 2027', en: 'October 2027' }, countdown: '2027-10' },
    ],
  },

  // photo = base name in /img (generated by `npm run images`)
  gallery: [
    { photo: 'canyon', cat: 'travel', d: '14 Mar 2019', c: { it: 'Grand Canyon', en: 'Grand Canyon' } },
    { photo: 'laurea', cat: 'milestones', d: '12 Dec 2019', c: { it: 'Laurea triennale', en: 'Bachelor’s graduation' } },
    { photo: 'nonno', cat: 'people', d: '12 Sep 2019', c: { it: 'Una serata da ricordare', en: 'A night to remember' } },
    { photo: 'futsal', cat: 'sport', d: '4 Nov 2020', c: { it: 'In campo con San Marino', en: 'On court with San Marino' } },
  ],
};
