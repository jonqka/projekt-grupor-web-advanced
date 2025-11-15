const translations = {
    en: {
        siteTitle: "Explore the World",
        navHome: "Home",
        navDestinations: "Destinations",
        navAbout: "About",
        navContact: "Contact",
        heroTitle: "Discover Amazing Destinations",
        heroSubtitle: "Explore the world's most beautiful places",
        selectCountry: "Select a Country:",
        destinationsTitle: "Top Destinations",
        selectCountryPrompt: "Please select a country to see destinations",
        copyright: "© 2025 Explore the World. All rights reserved.",
        aboutHeading: "",
        aboutParagraph: "At our travel agency, we believe that travel is more than just visiting new places—it’s about creating stories, discovering yourself, and connecting with the world in meaningful ways. Founded by a team of passionate explorers, storytellers, and travel experts, our mission is to inspire people to see the world differently and make every journey unforgettable. We know that no two travelers are the same, which is why we focus on crafting experiences that are as unique as you are. Whether you crave the serenity of a tropical island, the excitement of bustling city streets, or the wonder of hidden cultural gems, we’re here to guide you every step of the way.",
        foundersTitle: "Book Your Next",
        f1_name: "Honeymoons",
        f1_role: "",
        f1_bio: "You've already planned the wedding. Why add anything else to your plate? Let us handle the honeymoon so you can focus on each other.",
        f1_alt: "Photo of Ana Silva",
        f2_name: "Cruises",
        f2_role: "",
        f2_bio: "Our Advisors matchmake every sea-bound passenger to the right ship, whether it's your first or fiftieth time on board. Every voyage is tailored to your tastes and preferences.",
        f2_alt: "",
        f3_name: "Celebrations & milestones",
        f3_role: "",
        f3_bio: "From milestone celebrations to epic get-togethers, Fora makes planning group travel easy. Let an expert advisor bring your vision to life.",
        f3_alt: "",
        faqTitle: "Frequently Asked Questions",
        faq_q1: "What is your cancellation policy?",
        faq_a1: "Our cancellation policy depends on the product — please contact support for details.",
        faq_q2: "Do you offer travel insurance?",
        faq_a2: "Yes — we offer optional travel insurance packages at booking.",
        faq_q3: "Can you handle group bookings?",
        faq_a3: "Absolutely — we specialize in group travel and events. Contact our advisors to get started."
    },
    al: {
        siteTitle: "Eksploro Botën",
        navHome: "Kryefaqja",
        navDestinations: "Destinacionet",
        navAbout: "Rreth Nesh",
        navContact: "Kontakti",
        heroTitle: "Zbulo Destinacione të Mrekullueshme",
        heroSubtitle: "Eksploro vendet më të bukura të botës",
        selectCountry: "Zgjidhni një Vend:",
        destinationsTitle: "Destinacionet Kryesore",
        selectCountryPrompt: "Ju lutemi zgjidhni një vend për të parë destinacionet",
        copyright: "© 2025 Eksploro Botën. Të gjitha të drejtat e rezervuara.",
        aboutHeading: "",
        aboutParagraph: "Në agjencinë tonë të udhëtimit, besojmë se udhëtimi është më shumë se thjesht të vizitosh vende të reja—është krijimi i historive, zbulimi i vetvetes dhe lidhja me botën në mënyra të qëndrueshme dhe domethënëse. E themeluar nga një ekip eksploruesish, rrëfimtarësh dhe ekspertësh të udhëtimeve, misioni ynë është të inspirojmë njerëzit të shohin botën ndryshe dhe të bëjnë çdo udhëtim të paharrueshëm. Ne e dimë që asnjë udhëtar nuk është i njëjtë, prandaj fokusohemi në krijimin e përvojave aq të veçanta sa jeni ju. Qoftë që kërkoni qetësinë e një ishulli tropikal, emocionin e rrugëve të zëna të qytetit, apo çuditë e thesareve kulturore të fshehura, ne jemi këtu për t'ju udhëhequr në çdo hap.",
        foundersTitle: "Rezervo Udhëtimin Tënd Tjetër",
        f1_name: "Pushimet e Mjaltit",
        f1_role: "",
        f1_bio: "Tashmë keni planifikuar dasmën. Pse të shtoni diçka tjetër në listën tuaj? Le të kujdesemi për pushimet e mjaltit në mënyrë që të përqendroheni tek njëri-tjetri.",
        f1_alt: "Foto e Hënës së Mjaltit",
        f2_name: "Kruzera",
        f2_role: "",
        f2_bio: "Këshilltarët tanë përputhin çdo udhëtar detar me anijen e duhur, qoftë hera e parë apo e pesëdhjeta në bord. Çdo udhëtim përshtatet me shijet dhe preferencat tuaja.",
        f2_alt: "",
        f3_name: "Festime & Momente të Rëndësishme",
        f3_role: "",
        f3_bio: "Nga festimet kryesore tek takimet e mëdha, ne e bëjmë planifikimin e udhëtimeve në grup të thjeshtë. Lejoni një këshilltar ekspert të realizojë vizionin tuaj.",
        f3_alt: "",
        faqTitle: "Pyetjet Më të Shpeshta",
        faq_q1: "Cili është politika juaj e anulimit?",
        faq_a1: "Politika jonë e anulimit varet nga produkti — ju lutemi kontaktoni mbështetjen për detaje.",
        faq_q2: "A ofroni sigurim udhëtimi?",
        faq_a2: "Po — ne ofrojmë paketat opsionale të sigurimit të udhëtimit gjatë rezervimit.",
        faq_q3: "A mund të përballeni me rezervime grupore?",
        faq_a3: "Absolutisht — ne specializohemi në udhëtime dhe ngjarje për grupe. Kontaktoni këshilltarët tanë për të filluar."
    }
};




let currentLanguage = localStorage.getItem('language') || 'en';


document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLanguage);
});


function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

 
    const btnEn = document.getElementById('btn-en');
    const btnAl = document.getElementById('btn-al');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnAl) btnAl.classList.toggle('active', lang === 'al');

   
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.innerHTML = translations[lang][key];
        }
    });

  
    document.querySelectorAll('[data-translate-alt]').forEach(element => {
        const key = element.getAttribute('data-translate-alt');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.alt = translations[lang][key];
        }
    });


    const countrySelect = document.getElementById('country-select');
    const selectedCountry = countrySelect ? countrySelect.value : '';
    if (selectedCountry) {
        showDestinations();
    }
}


function showDestinations() {
    const countrySelect = document.getElementById('country-select');
    const country = countrySelect.value;
    const container = document.getElementById('destinations-container');

    if (!country) {
        if (container) {
            container.innerHTML = `<p style="text-align: center; color: #64748b;" data-translate="selectCountryPrompt">${translations[currentLanguage].selectCountryPrompt}</p>`;
        }
        return;
    }

    const countryDestinations = destinations[country][currentLanguage];

    if (container) {
        container.innerHTML = countryDestinations.map(dest => `
            <div class="destination-card">
                <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                <div class="destination-card-content">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                </div>
            </div>
        `).join('');
    }

}

// Accordion behavior
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.accordion-trigger');
    if (!btn) return;

    const item = btn.parentElement;
    const panel = item.querySelector('.accordion-panel');
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    // Close all items if you want only one open at a time (optional)
    // document.querySelectorAll('.accordion-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
    // document.querySelectorAll('.accordion-panel').forEach(p => p.classList.add('hidden'));

    btn.setAttribute('aria-expanded', String(!expanded));
    if (panel) panel.classList.toggle('hidden', expanded);
});
