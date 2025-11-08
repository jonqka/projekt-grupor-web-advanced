// Translations and language switching for contact page

const translations = {
    en: {
        siteTitle: "Explore the World",
        navHome: "Home",
        navDestinations: "Destinations",
        navAbout: "About",
        navContact: "Contact",
        contactTitle: "Get in Touch",
        contactSubtitle: "We'd love to hear from you! Send us a message or follow us on social media.",
        contactNameLabel: "Your Name:",
        contactEmailLabel: "Your Email:",
        contactMessageLabel: "Your Message:",
        contactButton: "Send Message",
        contactInfoTitle: "Contact Information",
        contactAddressLabel: "Address:",
        // HTML allowed here for the address list
        contactAddress: "<li>Tirana, Albania</li><li>Paris, France</li><li>Rome, Italy</li><li>Tokyo, Japan</li><li>Washington DC, USA</li>",
        contactSent: "Thanks — your message has been sent.",
        contactSendError: "Please fill in all fields before sending.",
        contactMapTitle: "Find Us",
        contactMapIframeTitle: "Map of Tirana, Albania",
        copyright: "© 2025 Explore the World. All rights reserved."
    },
    al: {
        siteTitle: "Eksploro Botën",
        navHome: "Kryefaqja",
        navDestinations: "Destinacionet",
        navAbout: "Rreth Nesh",
        navContact: "Kontakti",
        contactTitle: "Na Kontaktoni",
        contactSubtitle: "Do të na pëlqente të dëgjonim nga ju! Na dërgoni një mesazh ose ndiqni në rrjetet sociale.",
        contactNameLabel: "Emri juaj:",
        contactEmailLabel: "Email-i juaj:",
        contactMessageLabel: "Mesazhi juaj:",
        contactButton: "Dërgo Mesazh",
        contactInfoTitle: "Informacion Kontakti",
        contactAddressLabel: "Adresa:",
        contactAddress: "<li>Tiranë, Shqipëri</li><li>Paris, Francë</li><li>Romë, Itali</li><li>Tokio, Japoni</li><li>Washington DC, SHBA</li>",
        contactSent: "Faleminderit — mesazhi juaj u dërgua.",
        contactSendError: "Ju lutem plotësoni të gjitha fushat para dërgimit.",
        contactMapTitle: "Ku jemi",
        contactMapIframeTitle: "Hartë e Tiranës, Shqipëri",
        copyright: "© 2025 Eksploro Botën. Të gjitha të drejtat e rezervuara."
    }
};

// Current language (persisted)
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize translations on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLanguage);
});

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update button states if present
    const btnEn = document.getElementById('btn-en');
    const btnAl = document.getElementById('btn-al');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnAl) btnAl.classList.toggle('active', lang === 'al');

    // Update all translatable elements (use innerHTML so lists can be injected)
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update attributes like alt when data-translate-alt is present
    document.querySelectorAll('[data-translate-alt]').forEach(element => {
        const key = element.getAttribute('data-translate-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });

    // Update title attribute for elements that use data-translate-title (iframe title, etc.)
    document.querySelectorAll('[data-translate-title]').forEach(element => {
        const key = element.getAttribute('data-translate-title');
        if (translations[lang] && translations[lang][key]) {
            element.title = translations[lang][key];
        }
    });

    // If there is a country selector on the page, refresh related content (guarded)
    const countrySelect = document.getElementById('country-select');
    if (countrySelect && typeof showDestinations === 'function') {
        const selectedCountry = countrySelect.value;
        if (selectedCountry) showDestinations();
    }
}

// Simple form handler to avoid errors and show a translated confirmation
function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const message = document.getElementById('message')?.value?.trim();

    if (!name || !email || !message) {
        alert(translations[currentLanguage].contactSendError);
        return;
    }

    // For now just show a confirmation message and reset the form
    alert(translations[currentLanguage].contactSent);
    const form = event.target;
    if (form && typeof form.reset === 'function') form.reset();
}
