export const brand = {
  name: 'Scuderia Galileo Galilei',
  shortName: 'Scuderia Galileo',
  program: 'STEM Racing ITA',
  school: 'Liceo Scientifico Galileo Galilei',
  email: 'scuderiagalileo.stemracingita@gmail.com',
  tagline: 'Scienza, pista e scuola.',
  manifesto:
    'Siamo la scuderia STEM Racing del Liceo Scientifico Galileo Galilei: progettiamo, costruiamo e portiamo in gara una monoposto in scala nata in classe, con il metodo scientifico e lo spirito di squadra.',
};

export type TeamMember = {
  name: string;
  role: string;
  official: boolean;
  placeholder?: boolean;
  description: string;
};

export const officialTeam: TeamMember[] = [
  {
    name: 'Minosi Marco',
    role: 'Principal',
    official: true,
    description:
      'Guida la scuderia: definisce le priorità, coordina i reparti e rappresenta il team nelle competizioni STEM Racing ITA e nei rapporti con scuola e sponsor.',
  },
  {
    name: 'Donatucci Matteo',
    role: 'Designing engineer',
    official: true,
    description:
      'Sviluppa il progetto della monoposto: CAD, aerodinamica e iterazioni di design. Traduce le idee del team in geometrie che possono essere stampate, testate e migliorate.',
  },
  {
    name: 'Lorenzo di Salvatore',
    role: 'Management',
    official: true,
    description:
      'Coordina tempi, risorse e comunicazioni della scuderia. Tiene insieme il lavoro della squadra, le scadenze di gara e il supporto logistico del progetto.',
  },
  {
    name: 'Membro ufficiale 4',
    role: 'Ruolo in definizione',
    official: true,
    placeholder: true,
    description: 'Scheda in arrivo: uno dei sei membri ufficiali del team STEM Racing.',
  },
  {
    name: 'Membro ufficiale 5',
    role: 'Ruolo in definizione',
    official: true,
    placeholder: true,
    description: 'Scheda in arrivo: uno dei sei membri ufficiali del team STEM Racing.',
  },
  {
    name: 'Membro ufficiale 6',
    role: 'Ruolo in definizione',
    official: true,
    placeholder: true,
    description: 'Scheda in arrivo: uno dei sei membri ufficiali del team STEM Racing.',
  },
];

export const extendedTeam: TeamMember[] = [
  { name: 'Ammendola Chiara', role: 'Designer', official: false, description: 'Contribuisce all’identità visiva e al linguaggio grafico della scuderia.' },
  { name: 'Benvenuti Pietro', role: 'Sponsor', official: false, description: 'Supporta le relazioni di sponsorizzazione e la rete di partner del progetto.' },
  { name: 'Borgogni Stefano', role: 'Sponsor', official: false, description: 'Lavora sul fronte sponsor e sulla visibilità del team.' },
  { name: 'Calvellini Giulio', role: 'Engineer', official: false, description: 'Supporta lo sviluppo tecnico della vettura e i test di ingegneria.' },
  { name: 'Di Bello Francesco', role: 'Sponsor', official: false, description: 'Collabora alle attività di partnership e promozione.' },
  { name: 'Fabbri Lorenzo', role: 'Sponsor', official: false, description: 'Supporta le relazioni con i partner e le attività di sponsorizzazione della scuderia.' },
  { name: 'Galasso Alessandro', role: 'Sponsor', official: false, description: 'Partecipa alle attività di sponsorizzazione del progetto.' },
  { name: 'Gallo Alvise', role: 'Sponsor', official: false, description: 'Supporta i rapporti con i partner della scuderia.' },
  { name: 'Giannuzzi Leonardo Mario', role: 'Sponsor', official: false, description: 'Collabora al fronte commerciale e di visibilità.' },
  { name: 'Innamorati Davide', role: 'Engineer', official: false, description: 'Lavora sul lato engineering: prove, misure e affinamento del progetto.' },
  { name: 'Maglioni Cesare', role: 'Sponsor', official: false, description: 'Contribuisce alle attività di fundraising e sponsor.' },
  { name: 'Maxim Dennis Andrea', role: 'Web Designer', official: false, description: 'Cura identità digitale e sito della scuderia.' },
  { name: 'Nikiforakis Andrea', role: 'Engineer', official: false, description: 'Supporta analisi e sviluppo tecnico della monoposto.' },
  { name: 'Pierantozzi Rebecca', role: 'Designer', official: false, description: 'Lavora sul design visivo e sulla comunicazione del team.' },
  { name: 'Zeppi Riccardo', role: 'Sponsor', official: false, description: 'Supporta le attività di sponsorizzazione del team.' },
];

export const faculty = [
  {
    name: 'Maria Santorelli',
    role: 'Docente referente',
    description:
      'Docente referente del progetto: accompagna la scuderia nel percorso STEM Racing, tiene il filo con la scuola e tutela il metodo di lavoro.',
  },
  {
    name: 'Vincenzo Mutarelli',
    role: 'Docente di aiuto',
    description:
      'Docente di supporto: aiuta il team nelle fasi tecniche e organizzative, affiancando gli studenti durante il progetto.',
  },
];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/macchina', label: 'Macchina' },
  { to: '/sponsor', label: 'Sponsor' },
  { to: '/competizioni', label: 'Competizioni' },
  { to: '/donazioni', label: 'Donazioni' },
  { to: '/contatti', label: 'Contatti' },
];

export const competitions = [
  {
    name: 'STEM Racing ITA — selezioni territoriali',
    when: 'Stagione in corso',
    where: 'Italia',
    status: 'In preparazione',
    detail:
      'Le gare STEM Racing (ex F1 in Schools) mettono alla prova design, pitching, marketing e prestazioni della monoposto in scala. È il primo palcoscenico della Scuderia Galileo.',
  },
  {
    name: 'Finale nazionale STEM Racing ITA',
    when: 'Obiettivo di stagione',
    where: 'Italia',
    status: 'Obiettivo',
    detail:
      'La finale nazionale premia i team che uniscono ingegneria, comunicazione e spirito di squadra. Ci prepariamo per arrivarci con un progetto completo, non solo con una macchina veloce.',
  },
  {
    name: 'Eventi scuola e open day',
    when: 'Durante l’anno scolastico',
    where: 'Liceo Scientifico Galileo Galilei',
    status: 'Attivi',
    detail:
      'Mostriamo il lavoro in classe: prototipi, maglietta ufficiale, stand e dimostrazioni per famiglie, compagni e partner della scuola.',
  },
];

export const carBuildSteps = [
  {
    title: 'Idea e brief',
    text: 'Partiamo dal regolamento STEM Racing e da una domanda semplice: come rende una monoposto in scala più efficiente, stabile e riconoscibile come Scuderia Galileo?',
  },
  {
    title: 'Design CAD',
    text: 'Il design engineer traduce il brief in modello 3D: linee, ali, fondo e packaging. Ogni superficie è un compromesso tra estetica, stampabilità e aerodinamica.',
  },
  {
    title: 'Analisi e iterazioni',
    text: 'Simulazioni, confrontiamo versioni, scartiamo ciò che non regge. Il metodo scientifico è il nostro pit wall: ipotesi, prova, misura, migliora.',
  },
  {
    title: 'Costruzione',
    text: 'Stampa, assemblaggio, finiture e livrea. La macchina smette di essere un file e diventa un oggetto che deve resistere alla pista.',
  },
  {
    title: 'Test in pista',
    text: 'Lanci, tempi, osservazioni. La strada — o il rettilineo di gara — è il giudice finale. Da lì torniamo al CAD.',
  },
];

export const quizQuestions = [
  {
    q: 'STEM Racing nasce come evoluzione di quale programma educativo?',
    options: ['F1 in Schools', 'Formula Student', 'Karting FIA'],
    answer: 0,
  },
  {
    q: 'Cosa misura soprattutto un test in galleria del vento (o CFD) su una monoposto in scala?',
    options: ['Il colore della livrea', 'Le forze aerodinamiche', 'Il numero di follower'],
    answer: 1,
  },
  {
    q: 'Chi è il Principal della Scuderia Galileo?',
    options: ['Fabbri Lorenzo', 'Minosi Marco', 'Donatucci Matteo'],
    answer: 1,
  },
  {
    q: 'Quale liceo finanzia e ospita il progetto?',
    options: ['Liceo Scientifico Galileo Galilei', 'Politecnico di Milano', 'Istituto Enzo Ferrari'],
    answer: 0,
  },
];
