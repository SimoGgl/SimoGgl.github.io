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
    available:        "disponibile per nuove opportunità",
    role:             "Network & Automation Engineer",
    bio:              "Progetto infrastrutture di rete, automatizzo processi ripetitivi e sviluppo strumenti per semplificare la gestione dei sistemi.",
    nav_progetti:     "Progetti",
    nav_esperienze:   "Esperienze",
    nav_contatti:     "Contatti",
    progetti_titolo:  "Progetti",
    proj1_desc:       "Automazione della configurazione di router e switch via Ansible su un ambiente virtuale GNS3.",
    proj2_desc:       "Script Python per sincronizzare l'inventario IP con NetBox tramite REST API.",
    proj3_desc:       "Descrizione del tuo terzo progetto.",
    esperienze_titolo:"Esperienze",
    exp1_desc:        "Descrizione delle tue attività e responsabilità principali.",
    exp2_desc:        "Descrizione delle tue attività e responsabilità principali.",
    exp3_desc:        "Descrizione del percorso formativo.",
    contatti_titolo:  "Contatti",
    contatti_desc:    "Vuoi collaborare o hai una proposta? Scrivimi pure.",
    scarica_cv:       "↓ Scarica CV",
  },
  en: {
    available:        "open to new opportunities",
    role:             "Network & Automation Engineer",
    bio:              "I design network infrastructures, automate repetitive processes and build tools to simplify system management.",
    nav_progetti:     "Projects",
    nav_esperienze:   "Experience",
    nav_contatti:     "Contact",
    progetti_titolo:  "Projects",
    proj1_desc:       "Automated router and switch configuration using Ansible on a virtual GNS3 environment.",
    proj2_desc:       "Python script to synchronize IP inventory with NetBox via REST API.",
    proj3_desc:       "Description of your third project.",
    esperienze_titolo:"Experience",
    exp1_desc:        "Description of your main activities and responsibilities.",
    exp2_desc:        "Description of your main activities and responsibilities.",
    exp3_desc:        "Description of your academic background.",
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