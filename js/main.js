/* ================================================
   TRADUZIONI
   Oggetto che contiene tutti i testi del sito
   in italiano e inglese.
   La chiave (es. "role") corrisponde all'attributo
   data-i18n usato nell'HTML.
   Per aggiungere una traduzione: aggiungi la chiave
   in entrambe le lingue it e en.
   ================================================ */

const translations = {
  it: {
    available:        "aperto a collaborazioni e progetti interessanti",
    role:             "Network & Automation Engineer",
    bio:              "Progetto infrastrutture di rete, automatizzo processi ripetitivi e sviluppo strumenti per semplificare la gestione dei sistemi.",
    nav_progetti:     "Progetti",
    nav_esperienze:   "Esperienze",
    nav_contatti:     "Contatti",
    progetti_titolo:  "Progetti",
    proj1_desc:       "Tool per la generazione automatica di documentazione di rete. Inserendo i dati di configurazione di uno o più apparati, il software produce file in diversi formati (PDF, TXT, DOC, CSV), inclusa una scheda semplificata per l'installatore.",
    esperienze_titolo:"Esperienze",
    exp1_date:        "2024 — oggi",
    exp1_role:       "Network & Automation Engineer",
    exp1_desc:        "Configurazione e attivazione di CPE per enti pubblici dell'Emilia-Romagna con apparati Juniper, Mikrotik, Arista e Cisco. Gestione del BOIX e del FeIX. Sviluppo di tool interni per monitoraggio e configurazione automatica dei dispositivi. Progetto pilota GPON con Huawei e TP-Link. Realizzazione di kit di emergenza Starlink/Mikrotik per enti colpiti da calamità.",
    exp2_date:        "2023",
    exp2_role:       "IT Support Specialist",
    exp2_desc:        "Supporto tecnico helpdesk di primo livello e gestione di richieste di modifica e aggiornamento siti web e software gestionali.",
    exp3_date:        "2022 — 2023",
    exp3_role:        "IFTS — Tecnico Informatico per Sistemi Industriali Intelligenti",
    exp3_desc:        "Percorso IFTS in ambito informatico industriale con votazione 98/100. Competenze acquisite: networking, programmazione (Python, PHP, JavaScript), database, PLC e sistemi industriali.",
    contatti_titolo:  "Contatti",
    contatti_desc:    "Vuoi collaborare o hai una proposta? Scrivimi pure.",
    scarica_cv:       "↓ Scarica CV",
  },
  en: {
    available:        "open to collaborations and interesting projects",
    role:             "Network & Automation Engineer",
    bio:              "I design network infrastructures, automate repetitive processes and build tools to simplify system management.",
    nav_progetti:     "Projects",
    nav_esperienze:   "Experience",
    nav_contatti:     "Contact",
    progetti_titolo:  "Projects",
    proj1_desc:       "Tool for automatic generation of network documentation. By entering the configuration data of one or more devices, the software produces files in multiple formats (PDF, TXT, DOC, CSV), including a simplified sheet for the installer.",
    esperienze_titolo:"Experience",
    exp1_date:        "2024 — present",
    exp1_role:        "Network & Automation Engineer",
    exp1_desc:        "Configuration and activation of CPEs for public institutions in Emilia-Romagna using Juniper, Mikrotik, Arista and Cisco devices. Management of BOIX and FeIX. Development of internal tools for monitoring and automatic device configuration. GPON pilot project with Huawei and TP-Link. Deployment of emergency Starlink/Mikrotik kits for disaster-affected institutions.",
    exp2_date:        "2023",
    exp2_role:        "IT Support Specialist",
    exp2_desc:        "First-level helpdesk technical support and management of update and modification requests for websites and management software.",
    exp3_role:        "IFTS — IT Technician for Intelligent Industrial Systems",
    exp3_date:        "2022 — 2023",
    exp3_desc:        "IFTS program in industrial IT with a grade of 98/100. Skills acquired: networking, programming (Python, PHP, JavaScript), databases, PLC and industrial systems.",
    contatti_titolo:  "Contact",
    contatti_desc:    "Want to collaborate or have a proposal? Feel free to reach out.",
    scarica_cv:       "↓ Download CV",
  }
};

/* ================================================
   LINGUA CORRENTE
   Partiamo sempre in italiano. Il valore cambia
   quando l'utente clicca il bottone EN/IT.
   ================================================ */

let currentLang = 'it';

/* ================================================
   APPLICA TRADUZIONI
   Cerca tutti gli elementi HTML che hanno
   l'attributo data-i18n e sostituisce il loro
   testo con la traduzione nella lingua corrente.
   ================================================ */

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  /* aggiorna l'attributo lang della pagina —
     utile per i motori di ricerca e gli screen reader */
  document.documentElement.lang = lang;
}

/* ================================================
   BOTTONE CAMBIO LINGUA
   Al click inverte la lingua corrente e aggiorna
   il testo del bottone (mostra sempre la lingua
   a cui si può passare, non quella attiva).
   ================================================ */

const langToggle = document.getElementById('lang-toggle');

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'it' ? 'en' : 'it';
  langToggle.textContent = currentLang === 'it' ? 'EN' : 'IT';
  applyTranslations(currentLang);

  /* aggiorna il link del CV in base alla lingua attiva */
  const cvButton = document.querySelector('.cv-button');
  cvButton.href = currentLang === 'it' ? 'assets/cv-ita.pdf' : 'assets/cv-en.pdf';
});

/* ================================================
   SMOOTH SCROLL
   Intercetta i click sui link della navbar che
   puntano a un'ancora (#progetti, #esperienze ecc.)
   e scrolla fluido alla sezione corretta invece
   di saltarci di scatto.
   Il offset di 60px compensa l'altezza della
   navbar fissa, così il titolo della sezione
   non finisce nascosto sotto di essa.
   ================================================ */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const navHeight = document.getElementById('navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

