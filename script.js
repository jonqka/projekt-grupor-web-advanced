
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
        aboutHeading: "About Us",
        aboutParagraph: "At our travel agency, we believe that travel is more than just visiting new places—it’s about creating stories, discovering yourself, and connecting with the world in meaningful ways. Founded by a team of passionate explorers, storytellers, and travel experts, our mission is to inspire people to see the world differently and make every journey unforgettable. We know that no two travelers are the same, which is why we focus on crafting experiences that are as unique as you are. Whether you crave the serenity of a tropical island, the excitement of bustling city streets, or the wonder of hidden cultural gems, we’re here to guide you every step of the way.",
        foundersTitle: "Our Founders",
        f1_name: "Ana Silva",
        f1_role: "Co‑Founder & CEO",
        f1_bio: "Ana is a world traveler and former travel writer who specializes in immersive cultural experiences and sustainable tourism.",
        f1_alt: "Photo of Ana Silva",
        f2_name: "Marko Dervishi",
        f2_role: "Co‑Founder & CTO",
        f2_bio: "Marko builds the tools that help travelers discover the best routes, local guides, and hidden gems around the globe.",
        f2_alt: "Photo of Marko Dervishi",
        f3_name: "Elira Kola",
        f3_role: "Co‑Founder & Head of Experiences",
        f3_bio: "Elira curates unique itineraries and partners with local artisans and guides to create unforgettable trips.",
        f3_alt: "Photo of Elira Kola"
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
        aboutHeading: "Rreth Nesh",
        aboutParagraph: "Në agjencinë tonë të udhëtimit, besojmë se udhëtimi është më shumë se thjesht të vizitosh vende të reja—është krijimi i historive, zbulimi i vetvetes dhe lidhja me botën në mënyra të qëndrueshme dhe domethënëse. E themeluar nga një ekip eksploruesish, rrëfimtarësh dhe ekspertësh të udhëtimeve, misioni ynë është të inspirojmë njerëzit të shohin botën ndryshe dhe të bëjnë çdo udhëtim të paharrueshëm. Ne e dimë që asnjë udhëtar nuk është i njëjtë, prandaj fokusohemi në krijimin e përvojave aq të veçanta sa jeni ju. Qoftë që kërkoni qetësinë e një ishulli tropikal, emocionin e rrugëve të zëna të qytetit, apo çuditë e thesareve kulturore të fshehura, ne jemi këtu për t'ju udhëhequr në çdo hap.",
        foundersTitle: "Themeltuesit Tanë",
        f1_name: "Ana Silva",
        f1_role: "Bashkë‑themeluese & Drejtuese Ekzekutive",
        f1_bio: "Ana është udhëtuese e pasionuar dhe gazetare e udhëtimeve, specialiste për përvoja kulturore të thella dhe turizëm të qëndrueshëm.",
        f1_alt: "Foto e Ana Silva",
        f2_name: "Marko Dervishi",
        f2_role: "Bashkë‑themelues & CTO",
        f2_bio: "Marko krijon mjetet që ndihmojnë udhëtarët të zbulojnë rrugët më të mira, guidat lokale dhe thesaret e fshehura.",
        f2_alt: "Foto e Marko Dervishi",
        f3_name: "Elira Kola",
        f3_role: "Bashkë‑themeluese & Drejtore e Përvojave",
        f3_bio: "Elira kuruar itinerare unike dhe bashkëpunon me artizanë dhe guida lokale për të krijuar udhëtime të paharrueshme.",
        f3_alt: "Foto e Elira Kola"
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
