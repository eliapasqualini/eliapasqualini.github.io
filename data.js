/* All site content lives here. Entries with `ex: true` (or {{ex}} in text) are placeholders. */
window.SITE = {
  i18n: {
    it: {
      'nav.about': 'README', 'nav.timeline': 'In numeri', 'nav.projects': 'Progetti', 'nav.life': 'Viaggi & vita', 'nav.now': 'Adesso', 'nav.contact': 'Contatti',
      'hero.lead': 'Scrivo software e trasformo dati in decisioni.',
      'cta.projects': 'Progetti', 'cta.life': 'Viaggi & vita',
      'about.title': 'README.md', 'about.preview': 'Anteprima', 'about.code': 'Codice',
      'nb.title': 'Elia in numeri', 'nb.lead': 'La mia storia, raccontata come la racconterebbe un data analyst: con una dashboard. Dati aggiornati in tempo reale, precisione variabile.', 'nb.source': 'Fonte: memoria di Elia · affidabilità: buona',
      'proj.title': 'Progetti',
      'proj.lead': 'Apri un file per leggere il progetto. I progetti in Marlu sono coperti da NDA: ne racconto il problema, l’approccio e le tecnologie, non il codice né i dati. Quelli pubblici hanno il link a GitHub ↗.',
      'proj.explorer': 'EXPLORER · PROGETTI', 'proj.root': 'progetti',
      'proj.context': 'Contesto', 'proj.problem': 'Problema', 'proj.solution': 'Cosa ho fatto', 'proj.arch': 'Architettura', 'proj.stack': 'Stack', 'proj.outcome': 'Risultato',
      'proj.nda': 'Progetto aziendale riservato (NDA): codice, dati e cliente non sono divulgabili. Descrivo solo approccio e tecnologie.',
      'proj.repo': 'Vedi su GitHub', 'proj.wip': 'in corso',
      'life.title': 'Viaggi & vita',
      'life.lead': 'Quello che c’è oltre lo schermo: viaggi, montagne, mare e campi da futsal.',
            'life.moments': 'Momenti', 'life.all': 'Tutto', 'life.travel': 'Viaggi', 'life.mountain': 'Montagna', 'life.sea': 'Mare', 'life.sport': 'Sport',
      'now.title': 'Adesso', 'now.lead': 'Cosa mi tiene occupato in questo periodo.', 'now.updated': 'Aggiornato a',
      'contact.title': 'Contatti', 'contact.lead': 'Hai un’idea e vuoi costruire qualcosa insieme? Scrivimi.', 'contact.copy': 'clicca per copiare',
      'footer.hint': 'Premi <kbd>\\</kbd> o <kbd>`</kbd> per aprire il terminale', example: 'esempio',
      copied: 'Email copiata ✓',
    },
    en: {
      'nav.about': 'README', 'nav.timeline': 'By the numbers', 'nav.projects': 'Projects', 'nav.life': 'Travel & life', 'nav.now': 'Now', 'nav.contact': 'Contact',
      'hero.lead': 'I write software and turn data into decisions.',
      'cta.projects': 'Projects', 'cta.life': 'Travel & life',
      'about.title': 'README.md', 'about.preview': 'Preview', 'about.code': 'Code',
      'nb.title': 'Elia by the numbers', 'nb.lead': 'My story, told the way a data analyst would tell it: as a dashboard. Real-time data, variable precision.', 'nb.source': 'Source: Elia’s memory · reliability: good',
      'proj.title': 'Projects',
      'proj.lead': 'Open a file to read about the project. Marlu projects are under NDA: I describe the problem, the approach and the technologies, not the code or the data. Public ones link to GitHub ↗.',
      'proj.explorer': 'EXPLORER · PROJECTS', 'proj.root': 'projects',
      'proj.context': 'Context', 'proj.problem': 'Problem', 'proj.solution': 'What I did', 'proj.arch': 'Architecture', 'proj.stack': 'Stack', 'proj.outcome': 'Outcome',
      'proj.nda': 'Confidential company project (NDA): code, data and client cannot be disclosed. I only describe the approach and the technologies.',
      'proj.repo': 'View on GitHub', 'proj.wip': 'in progress',
      'life.title': 'Travel & life',
      'life.lead': 'What lies beyond the screen: trips, mountains, the sea and futsal courts.',
            'life.moments': 'Moments', 'life.all': 'All', 'life.travel': 'Travel', 'life.mountain': 'Mountains', 'life.sea': 'Sea', 'life.sport': 'Sport',
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
        solution: { it: 'Single page in HTML/CSS/JS puro: una dashboard ironica su di me, i progetti come esplora file e un terminale con query SQL sui miei dati.', en: 'Plain HTML/CSS/JS single page: a tongue-in-cheek dashboard about me, projects as a file explorer and a terminal with SQL queries over my data.' },
        arch: ['data.js', 'Render JS', 'HTML/CSS', 'GitHub Pages'],
        stack: [['JavaScript', { it: 'rendering, dashboard, terminale e parser SQL', en: 'rendering, dashboard, terminal and SQL parser' }], ['HTML/CSS', { it: 'layout e animazioni, nessun framework', en: 'layout and animations, no frameworks' }], ['sharp', { it: 'compressione delle foto in WebP', en: 'photo compression to WebP' }]],
      } },
    // Work projects (Marlu, NDA): order = order in the explorer. `year` omitted until confirmed; `wip` = in progress.
    { id: 'bi', file: 'dashboard-bi', branch: 'work', type: 'feat', scope: 'bi', nda: true,
      t: { it: 'dashboard per direzione, commerciale e acquisti', en: 'dashboards for management, sales and purchasing' },
      r: {
        context: { it: 'Ogni reparto lavorava con le proprie estrazioni e i propri fogli Excel: la stessa domanda poteva avere tre risposte diverse.', en: 'Every department worked with its own extracts and spreadsheets: the same question could get three different answers.' },
        problem: { it: 'Serviva una vista unica e sempre aggiornata su KPI aziendali, vendite e magazzino, in cui ogni reparto trovasse i numeri di sua competenza.', en: 'We needed a single, always up-to-date view of company KPIs, sales and stock, where each department finds the numbers it owns.' },
        solution: { it: 'Ho costruito modelli semantici e report in Power BI per **direzione e finanza**, **commerciale e vendite**, **acquisti e magazzino**, con misure DAX condivise tra i report e aggiornamento automatico dei dati.', en: 'I built semantic models and Power BI reports for **management & finance**, **sales** and **purchasing & warehouse**, with DAX measures shared across reports and automatic data refresh.' },
        arch: ['Gestionale', 'SQL Server', 'Modello semantico', 'Report per reparto'],
        stack: [['Power BI', { it: 'report e modelli semantici', en: 'reports and semantic models' }], ['DAX', { it: 'KPI e misure condivise', en: 'KPIs and shared measures' }], ['Power Query', { it: 'preparazione e pulizia dei dati', en: 'data preparation and cleaning' }], ['SQL Server', { it: 'viste sorgente', en: 'source views' }]],
        outcome: { it: 'Numeri unici e affidabili per tutti i reparti e decisioni più rapide: i report sono pronti ogni mattina, senza estrazioni manuali.', en: 'One reliable set of numbers for every department and faster decisions: reports are ready every morning, no manual extracts.' },
      } },
    { id: 'fabric', file: 'migrazione-fabric', branch: 'work', type: 'feat', scope: 'data', nda: true, wip: true,
      t: { it: 'migrazione della piattaforma dati su Microsoft Fabric', en: 'data platform migration to Microsoft Fabric' },
      r: {
        context: { it: 'La piattaforma dati aziendale è cresciuta su SQL Server e oggi alimenta tutti i report.', en: 'The company data platform grew on SQL Server and now feeds every report.' },
        problem: { it: 'Più fonti, più utenti, più richieste: serviva una piattaforma unica e scalabile, con meno infrastruttura da mantenere.', en: 'More sources, more users, more requests: we needed a single, scalable platform with less infrastructure to maintain.' },
        solution: { it: 'Sto guidando la migrazione di data warehouse e flussi di caricamento verso Microsoft Fabric, mantenendo operativi i report esistenti durante il passaggio.', en: 'I’m leading the migration of the data warehouse and load flows to Microsoft Fabric, keeping existing reports running throughout the transition.' },
        arch: ['Gestionale', 'Dataflow', 'Microsoft Fabric', 'Power BI'],
        stack: [['Microsoft Fabric', { it: 'la nuova piattaforma dati', en: 'the new data platform' }], ['Dataflow / Power Query', { it: 'caricamento e trasformazione dei dati', en: 'data loading and transformation' }], ['SQL', { it: 'modellazione', en: 'modelling' }], ['Power BI', { it: 'report collegati alla nuova piattaforma', en: 'reports on the new platform' }]],
      } },
    { id: 'logistica', file: 'logistica-corrieri', branch: 'work', type: 'feat', scope: 'erp', nda: true,
      t: { it: 'picking in magazzino e integrazione API con i corrieri', en: 'warehouse picking and carrier API integration' },
      r: {
        context: { it: 'Dal gestionale partono ogni giorno ordini da preparare e spedire con corrieri diversi, ognuno con il proprio sistema.', en: 'Every day the ERP releases orders to be prepared and shipped with different carriers, each with its own system.' },
        problem: { it: 'Picking, etichette e comunicazione con i corrieri passavano da passaggi manuali e portali diversi: lento, soggetto a errori e senza una visione unica dello stato delle spedizioni.', en: 'Picking, labels and carrier communication went through manual steps and separate portals: slow, error-prone and with no single view of shipment status.' },
        solution: { it: 'Ho realizzato il flusso completo: la gestione del **picking in magazzino** a partire dagli ordini del gestionale e l’**integrazione via API con ogni singolo corriere** per creare spedizioni, generare **etichette e documenti di trasporto** e far rientrare **esiti e tracking** nel gestionale.', en: 'I built the end-to-end flow: **warehouse picking** driven by ERP orders and an **API integration with each individual carrier** to create shipments, generate **labels and transport documents** and bring **outcomes and tracking** back into the ERP.' },
        arch: ['Gestionale', 'Picking', 'API corrieri', 'Esiti e tracking'],
        stack: [['API REST', { it: 'integrazione diretta con le API di ogni corriere', en: 'direct integration with each carrier’s API' }], ['SQL Server', { it: 'ordini, picking e stato delle spedizioni', en: 'orders, picking and shipment status' }], ['T-SQL', { it: 'logica di preparazione e allineamento col gestionale', en: 'preparation logic and ERP alignment' }]],
        outcome: { it: 'Meno errori operativi nella preparazione e nelle spedizioni, un unico punto per tutti i corrieri e stato delle consegne sempre visibile dal gestionale.', en: 'Fewer operational errors in picking and shipping, one place for every carrier and delivery status always visible in the ERP.' },
      } },
    { id: 'store', file: 'app-ordini-store', branch: 'work', type: 'feat', scope: 'web', nda: true,
      t: { it: 'applicativo ordini per i punti vendita', en: 'ordering app for retail stores' },
      r: {
        problem: { it: 'I punti vendita ordinavano alla sede senza vedere la disponibilità reale della merce, con ordini da ritrascrivere nel gestionale.', en: 'Stores ordered from head office without seeing real availability, and orders had to be re-keyed into the ERP.' },
        solution: { it: 'Ho sviluppato un applicativo client-server: dai negozi si inseriscono **ordini e riassortimenti** consultando la **disponibilità in tempo reale**, e gli ordini arrivano **direttamente nel gestionale**.', en: 'I built a client-server application: stores place **orders and replenishments** while checking **real-time availability**, and orders land **straight in the ERP**.' },
        arch: ['Negozi (web app)', 'SQL Server', 'Gestionale'],
        stack: [['Web app', { it: 'interfaccia usata dai negozi', en: 'interface used by the stores' }], ['SQL Server', { it: 'logica applicativa e dati', en: 'business logic and data' }], ['T-SQL', { it: 'integrazione con il gestionale', en: 'ERP integration' }]],
        outcome: { it: 'Niente più ordini ritrascritti a mano e disponibilità sempre aggiornata per chi ordina.', en: 'No more re-keyed orders and always up-to-date availability for whoever orders.' },
      } },
    { id: 'lead', branch: 'work', type: 'feat', scope: 'role', year: 2024, yq: true, tag: 'lead',
      t: { it: 'promosso a Data Platform Lead', en: 'promoted to Data Platform Lead' },
      r: {
        context: { it: 'Da developer e data analyst a responsabile della piattaforma dati di Marlu.', en: 'From developer and data analyst to owner of Marlu’s data platform.' },
        solution: { it: 'Oggi progetto le integrazioni ERP e seguo tutta l’area di analisi dati e Business Intelligence, dalla sorgente al report.', en: 'Today I design ERP integrations and own the whole data analysis & Business Intelligence area, from source to report.' },
        arch: ['ERP', 'Integrazioni', 'Data platform', 'BI'],
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

  // photo = base name in /img (generated by `npm run images` from /foto). d = place shown on the polaroid.
  // cat: travel | mountain | sea | sport
  gallery: [
    { photo: 'aurora2', cat: 'travel', d: { it: 'Lofoten, Norvegia', en: 'Lofoten, Norway' }, c: { it: 'Quando il cielo decide di dare spettacolo', en: 'When the sky decides to put on a show' } },
    { photo: 'grandcanyon', cat: 'travel', d: 'Arizona, USA', c: { it: 'Il Grand Canyon, con calma', en: 'The Grand Canyon, taking it slow' } },
    { photo: 'nazionaleazzurra', cat: 'sport', d: { it: 'Nazionale di San Marino', en: 'San Marino National Team' }, c: { it: 'Il 6 della Nazionale, occhi sulla palla', en: 'Number 6 for the national team, eyes on the ball' } },
    { photo: 'montagna3', cat: 'mountain', d: { it: 'Montagna', en: 'Mountains' }, c: { it: 'Sentieri, creste e nessuna notifica', en: 'Trails, ridges and zero notifications' } },
    { photo: 'clubcoppa', cat: 'sport', d: { it: 'Futsal · Folgore', en: 'Futsal · Folgore' }, c: { it: 'Supercoppa alzata, medaglie al collo', en: 'Super Cup lifted, medals on' } },
    { photo: 'milos', cat: 'travel', d: { it: 'Milos, Grecia', en: 'Milos, Greece' }, c: { it: 'Acqua turchese e barche dei pescatori', en: 'Turquoise water and fishing boats' } },
    { photo: 'lofoten', cat: 'travel', d: { it: 'Lofoten, Norvegia', en: 'Lofoten, Norway' }, c: { it: 'Case rosse e montagne a picco sul mare', en: 'Red cabins and mountains dropping into the sea' } },
    { photo: 'nazionaletrasferta', cat: 'sport', d: { it: 'Nazionale · in trasferta', en: 'National team · away' }, c: { it: 'Foto di squadra prima del fischio d’inizio', en: 'Team photo before kick-off' } },
    { photo: 'sirolo', cat: 'travel', d: 'Sirolo, Marche', c: { it: 'Tramonto sulla Riviera del Conero', en: 'Sunset over the Conero Riviera' } },
    { photo: 'inizi', cat: 'sport', d: { it: 'Futsal · gli inizi con la Nazionale', en: 'Futsal · early days with the national team' }, c: { it: 'Dove è cominciato tutto', en: 'Where it all began' } },
    { photo: 'montagna2', cat: 'mountain', d: { it: 'Montagna', en: 'Mountains' }, c: { it: 'Ancora un po’ e siamo in cima', en: 'Almost at the top' } },
    { photo: 'festatitolo', cat: 'sport', d: { it: 'Futsal · Tre Penne', en: 'Futsal · Tre Penne' }, c: { it: 'Coppa conquistata, voce persa', en: 'Cup won, voice lost' } },
    { photo: 'aurora', cat: 'travel', d: { it: 'Lofoten, Norvegia', en: 'Lofoten, Norway' }, c: { it: 'Aurora boreale sopra le rorbu', en: 'Northern lights over the rorbu cabins' } },
    { photo: 'clubcampo', cat: 'sport', d: { it: 'Futsal · Folgore', en: 'Futsal · Folgore' }, c: { it: 'Concentrazione prima dell’azione', en: 'Focus before the play' } },
    { photo: 'premionazionale', cat: 'sport', d: { it: 'Futsal · stagione 2021', en: 'Futsal · 2021 season' }, c: { it: 'Premio miglior giocatore della stagione', en: 'Player of the season award' } },
    { photo: 'montagna', cat: 'mountain', d: { it: 'Montagna', en: 'Mountains' }, c: { it: 'Sci, amici e foto di gruppo d’ordinanza', en: 'Skis, friends and the obligatory group photo' } },
    { photo: 'festatrofeo', cat: 'sport', d: { it: 'Futsal · Fiorentino', en: 'Futsal · Fiorentino' }, c: { it: 'Campionato vinto, sciarpa compresa', en: 'League won, scarf included' } },
    { photo: 'nazionaleblu', cat: 'sport', d: { it: 'Nazionale di San Marino', en: 'San Marino National Team' }, c: { it: 'Schierati con la maglia blu', en: 'Lined up in the blue kit' } },
    { photo: 'orche', cat: 'travel', d: { it: 'Norvegia', en: 'Norway' }, c: { it: 'Pronto per l’uscita in cerca di orche', en: 'Ready for the orca-watching trip' } },
    { photo: 'montagna4', cat: 'mountain', d: { it: 'Montagna', en: 'Mountains' }, c: { it: 'Discesa completata, pausa meritata', en: 'Run completed, well-earned break' } },
    { photo: 'nazionaleazione', cat: 'sport', d: { it: 'Nazionale di San Marino', en: 'San Marino National Team' }, c: { it: 'Protezione palla, versione Nazionale', en: 'Shielding the ball, national team edition' } },
    { photo: 'clubrosso', cat: 'sport', d: { it: 'Futsal · Virtus', en: 'Futsal · Virtus' }, c: { it: 'Palla al piede, testa alta', en: 'Ball at my feet, head up' } },
  ],
};
