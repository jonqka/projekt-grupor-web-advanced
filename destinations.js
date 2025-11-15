// Translations
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
        copyright: "© 2025 Explore the World. All rights reserved."
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
        copyright: "© 2025 Eksploro Botën. Të gjitha të drejtat e rezervuara."
    }
};

// Destinations Data
const destinations = {
    italy: {
        en: [
            {
                name: "Rome",
                description: "Ancient capital with iconic landmarks like the Colosseum and Vatican City.",
                image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176"
            },
            {
                name: "Venice",
                description: "Romantic city built on water with beautiful canals and gondolas.",
                image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600"
            },
            {
                name: "Florence",
                description: "Renaissance art capital with stunning architecture and museums.",
                image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            },
            {
                name: "Amalfi Coast",
                description: "Breathtaking coastal region with colorful villages and dramatic cliffs.",
                image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            },
            {
                name: "Colosseum",
                description: "Iconic ancient amphitheater in Rome, symbol of the Roman Empire.",
                image: "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            },
            {
                name: "Pantheon",
                description: "Ancient Roman temple with a remarkable dome and historical significance.",
                image: "https://images.unsplash.com/photo-1693824113672-c288819f3724?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
            }
        ],
        al: [
            {
                name: "Roma",
                description: "Kryeqyteti i lashtë me monumente ikonike si Koloseu dhe Vatikani.",
                image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176"
            },
            {
                name: "Venecia",
                description: "Qytet romantik i ndërtuar mbi ujë me kanale të bukura dhe gondola.",
                image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600"
            },
            {
                name: "Florenca",
                description: "Kryeqyteti i artit të Rilindjes me arkitekturë dhe muze mahnitëse.",
                image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            },
            {
                name: "Bregu i Amalfit",
                description: "Rajon bregdetar mahnitës me fshatra shumëngjyrëshe dhe shkëmbinj dramatikë.",
                image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            },
            {
                name: "Koloseu",
                description: "Amfiteatri ikonik i lashtë në Romë, simbol i Perandorisë Romake.",
                image: "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            },
            {
                name: "Panteoni",
                description: "Tempulli i lashtë romak me kupolë mahnitëse dhe rëndësi historike.",
                image: "https://images.unsplash.com/photo-1693824113672-c288819f3724?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
            }
        ]
    },
    france: {
        en: [
            {
                name: "Paris",
                description: "City of Light with the Eiffel Tower, Louvre Museum, and charming cafes.",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
            },
            {
                name: "Provence",
                description: "Picturesque countryside with lavender fields and medieval villages.",
                image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600"
            },
            {
                name: "Nice",
                description: "Beautiful French Riviera city with stunning beaches and promenades.",
                image: "https://images.unsplash.com/photo-1643914729809-4aa59fdc4c17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
            },
            {
                name: "Louvre Museum",
                description: "World-famous art museum housing the Mona Lisa and countless masterpieces.",
                image: "https://images.unsplash.com/photo-1587648415693-4a5362b2ce41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
            },
            {
                name: "Arc de Triomphe",
                description: "Iconic triumphal arch in Paris, symbol of French military victories.",
                image: "https://images.unsplash.com/photo-1694286433612-cdc3d0c58608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025"
            },
            {
                name: "Disneyland Paris",
                description: "Magical theme park with Disney characters, rides, and entertainment.",
                image: "https://images.unsplash.com/photo-1690097232120-a59669ee0989?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
            }
        ],
        al: [
            {
                name: "Parisi",
                description: "Qyteti i Dritës me Kullën Eiffel, Muzeu Louvre dhe kafene tërheqëse.",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
            },
            {
                name: "Provansa",
                description: "Fshat piktoresk me fusha me lulëkuqe dhe fshatra mesjetare.",
                image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600"
            },
            {
                name: "Nica",
                description: "Qytet i bukur i Rivierës Franceze me plazhe mahnitëse dhe shëtitore.",
                image: "https://images.unsplash.com/photo-1643914729809-4aa59fdc4c17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
            },
            {
                name: "Muzeu Louvre",
                description: "Muzeu i artit botërorisht i famshëm që strehon Mona Lisën dhe mijëra vepra kryemaster.",
                image: "https://images.unsplash.com/photo-1587648415693-4a5362b2ce41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
            },
            {
                name: "Harku i Triumfit",
                description: "Harku triumfal ikonik në Paris, simbol i fitoreve ushtarake franceze.",
                image: "https://images.unsplash.com/photo-1694286433612-cdc3d0c58608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025"
            },
            {
                name: "Disneyland Paris",
                description: "Parku magjik tematik me personazhe Disney, karusela dhe argëtim.",
                image: "https://images.unsplash.com/photo-1690097232120-a59669ee0989?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
            }
        ]
    },
    japan: {
        en: [
            {
                name: "Tokyo",
                description: "Modern metropolis blending traditional culture with cutting-edge technology.",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600"
            },
            {
                name: "Kyoto",
                description: "Ancient capital with beautiful temples, gardens, and geisha districts.",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600"
            },
            {
                name: "Osaka",
                description: "Vibrant city known for incredible street food and friendly locals.",
                image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?w=600"
            },
            {
                name: "Mount Fuji",
                description: "Iconic snow-capped volcano and Japan's highest mountain.",
                image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
            }
        ],
        al: [
            {
                name: "Tokio",
                description: "Metropol modern që bashkon kulturën tradicionale me teknologjinë e avancuar.",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600"
            },
            {
                name: "Kioto",
                description: "Kryeqyteti i lashtë me tempuj të bukur, kopshte dhe lagje gejshash.",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600"
            },
            {
                name: "Osaka",
                description: "Qytet dinamik i njohur për ushqim rrugësh të mahnitshëm dhe banorë miqësorë.",
                image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?w=600"
            },
            {
                name: "Mali Fuji",
                description: "Vullkani ikonik i mbuluar me borë dhe mali më i lartë i Japonisë.",
                image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
            }
        ]
    },
    albania: {
        en: [
            {
                name: "Saranda",
                description: "Beautiful coastal town with crystal-clear waters and stunning beaches.",
                image: "https://images.unsplash.com/photo-1742244002755-067b34f9f1c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
            },
            {
                name: "Berat",
                description: "UNESCO World Heritage city known as 'City of a Thousand Windows'.",
                image: "https://images.unsplash.com/photo-1705405999485-188af37e0462?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
            },
            {
                name: "Tirana",
                description: "Vibrant capital city with colorful buildings and rich history.",
                image: "https://images.unsplash.com/photo-1742500481926-f61a4be9abfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1082"
            },
            {
                name: "Gjirokastër",
                description: "Historic stone city with a magnificent Ottoman-era castle.",
                image: "https://images.unsplash.com/photo-1630339858071-4e64cc76fb6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
            }
        ],
        al: [
            {
                name: "Saranda",
                description: "Qytet i bukur bregdetar me ujëra kristal dhe plazhe mahnitëse.",
                image: "https://images.unsplash.com/photo-1742244002755-067b34f9f1c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
            },
            {
                name: "Berati",
                description: "Qytet nën mbrojtjen e UNESCO-s i njohur si 'Qyteti i Një Mijë Dritareve'.",
                image: "https://images.unsplash.com/photo-1705405999485-188af37e0462?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
            },
            {
                name: "Tirana",
                description: "Kryeqyteti dinamik me ndërtesa shumëngjyrëshe dhe histori të pasur.",
                image: "https://images.unsplash.com/photo-1742500481926-f61a4be9abfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1082"
            },
            {
                name: "Gjirokastra",
                description: "Qytet historik prej guri me një kështjellë madhështore nga epoka osmane.",
                image: "https://images.unsplash.com/photo-1630339858071-4e64cc76fb6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
            }
        ]
    },
    usa: {
        en: [
            {
                name: "New York City",
                description: "The city that never sleeps with iconic landmarks and diverse culture.",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600"
            },
            {
                name: "Grand Canyon",
                description: "Breathtaking natural wonder carved by the Colorado River.",
                image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600"
            },
            {
                name: "San Francisco",
                description: "Beautiful bay city famous for the Golden Gate Bridge and cable cars.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600"
            }
        ],
        al: [
            {
                name: "Nju Jorku",
                description: "Qyteti që nuk fle kurrë me monumente ikonike dhe kulturë të larmishme.",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600"
            },
            {
                name: "Grand Canyon",
                description: "Mrekulli natyrore mahnitëse e gdhendur nga lumi Kolorado.",
                image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600"
            },
            {
                name: "San Francisko",
                description: "Qytet i bukur në gji të detit i famshëm për Urën Golden Gate dhe tramvajët.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600"
            }
        ]
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLanguage);
});

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update button states
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-al').classList.toggle('active', lang === 'al');

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Refresh destinations if a country is selected
    const selectedCountry = document.getElementById('country-select').value;
    if (selectedCountry) {
        showDestinations();
    }
}

// Show destinations for selected country
function showDestinations() {
    const countrySelect = document.getElementById('country-select');
    const country = countrySelect.value;
    const container = document.getElementById('destinations-container');

    if (!country) {
        container.innerHTML = `<p style="text-align: center; color: #64748b;" data-translate="selectCountryPrompt">${translations[currentLanguage].selectCountryPrompt}</p>`;
        return;
    }

    const countryDestinations = destinations[country][currentLanguage];

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
