/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

const DEFAULT_LANGUAGE = 'fr';
const LANGUAGE_NAME_ATTRIBUTE = 'translatable-text';
const LANGUAGE_SELECTOR_ID = 'language-selector';

const translations = {
    fr: {
        "job-title": "@AdriKat - Développeur",
        "job-subtitle": "Ingénieur du numérique - Développeur et concepteur de jeux - Développeur de logiciels",
        "nav-profile": "Profil",
        "nav-portfolio": "Portfolio",
        "nav-about": "À propos",
        "nav-contact": "Contact",
        "title-profile": "Mon Profil",
        "title-portfolio": "Mes Projets",
        "title-about": "À propos",
        "title-contact": "Contact",
        "profile-subtitle": "Vous avez un projet en tête dans le domaine du game dev ou du software ?<br>N'hésitez pas à me contacter par mail ou par téléphone !",
        "profile-column-1-head": "Maîtrise de multiples <strong>languages de programmation</strong> parmi...",
            "profile-column-1-1": "C++ (avec notamment <em>Unreal Engine 5</em>)",
            "profile-column-1-2": "C# (avec <em>Unity</em>)",
            "profile-column-1-3": "C",
            "profile-column-1-4": "Python",
            "profile-column-1-5": "Java",
            "profile-column-1-6": "Bash (dans un environnement <em>Linux</em>)",
            "profile-column-1-7": "HTML/CSS/PHP/JavaScript (avec Symphony pour le web)",
        "profile-column-2-head": "Maîtrise de multiples <strong>outils</strong> de gestion de projet et burautique parmi...",
            "profile-column-2-1": "Gestionnaire de version GIT (+ LFS)",
            "profile-column-2-2": "Suite Microsoft Office",
            "profile-column-2-3": "Suite Google",
            "profile-column-2-4": "Microsoft Office",
        
        "about-p1": "Bonjour et bienvenue sur mon portfolio ! Je m'appelle Adrien Schroedel, passionné par le software et le game dev, j'ai tout naturellement intégré une école (Télécom SudParis) pour devenir ingénieur du numérique...<br/>Tout au long de ma formation, j'ai participé à de nombreux <a href=\"#portfolio\">projets de création de jeux vidéo</a>.",
        "about-p2": "Mon plaisir vient non seulement d'apporter mon expertise sur les moteurs de jeu les plus utilisés sur le marché, mais aussi de collaborer harmonieusement avec une équipe pluridisciplinaire pour offrir une œuvre digne du 10me art à tout type de publics.",
        "about-p3": "Mon rêve est d'intégrer une équipe ambitieuse partageant des valeurs fortes et une cohésion hors du commun. Dès lors que la motivation est présente, je pense que nous pouvons accomplir des merveilles ou comme diraient les jeunes, une <em>masterclass</em>...",

        "cv-button-see": "<i class=\"fa-solid fa-eye me-2\"></i>Voir mon CV !",
        "cv-button-download": "<i class=\"fas fa-download me-2\"></i>Télécharger mon CV !",

        "contact-subtitle": "Une question ? Une offre de stage ou d'emploi dans le game dev ou software ?<br/>N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais !",

        "projects-button-close":"<i class=\"fas fa-xmark fa-fw\"></i>Fermer",

        "project-6-title": "Rupture",
            "project-6-date": "Janvier - Juin 2024",
            "project-6-subtitle": "Un jeu vidéo impactant sur le thème du Développement Durable",
            "project-6-description-1": "<strong>Rupture</strong> est un projet réalisé par un groupe de 4 étudiants dans le cadre d'une formation en tant qu'ingénieur du numérique à Télécom SudParis.",
            "project-6-description-2": "Dans ce jeu à style narratif, vous incarnez le point de vue d'un humble robot constatant le statut de la société se plaçant dans un futur proche. Alors que votre simple mission est de rendre service à un jeune couple, votre tâche se métamorphose alors de manière imprévue, en une bien plus importante qu'un simple divertissement.",
            "project-6-description-3": "L'objectif primaire de ce projet était notamment d'apprendre à utiliser le moteur UnrealEngine 5 pour créer un jeu vidéo impactant sur le thème du Développement Durable.",
            "project-6-description-4": "Le rapport de notre projet est disponible.",

            "project-6-button-download": "<i class=\"fas fa-download me-2\"></i>Télécharger le rapport",
    },




    en: {
        "job-title": "@AdriKat - Developer",
        "job-subtitle": "Digital engineer - Game developer and designer - Software developer",
        "nav-profile": "Profile",
        "nav-portfolio": "Portfolio",
        "nav-about": "About",
        "nav-contact": "Contact",
        "title-profile": "My Profile",
        "title-portfolio": "My Projects",
        "title-about": "About",
        "title-contact": "Contact",
        "profile-subtitle": "Have a project in mind in the field of game or software dev ?<br>Do not hesitate to contact me by phone or email !",
        "profile-column-1-head": "Mastery of multiple <strong>programming languages</strong> including...",
            "profile-column-1-1": "C++ (including <em>Unreal Engine 5</em>)",
            "profile-column-1-2": "C# (with <em>Unity</em>)",
            "profile-column-1-3": "C",
            "profile-column-1-4": "Python",
            "profile-column-1-5": "Java",
            "profile-column-1-6": "Bash (in a <em>Linux</em> environment)",
            "profile-column-1-7": "HTML/CSS/PHP/JavaScript (with Symphony for the web)",
        "profile-column-2-head": "Mastery of multiple <strong>project management and office tools</strong> including...",
            "profile-column-2-1": "GIT version manager (+ LFS)",
            "profile-column-2-2": "Microsoft Office Suite",
            "profile-column-2-3": "Google Suite",
            "profile-column-2-4": "Microsoft Office",
        
        "about-p1": "Hello and welcome to my portfolio ! My name is Adrien Schroedel, passionate about software and game dev, I naturally joined a school (Télécom SudParis) to become a digital engineer...<br/>Throughout my training, I participated in many <a href=\"#portfolio\">video game creation projects</a>.",
        "about-p2": "My pleasure comes not only from bringing my expertise on the most used game engines on the market, but also from harmoniously collaborating with a multidisciplinary team to offer a work worthy of the 10th art to all types of audiences.",
        "about-p3": "My dream is to join an ambitious team sharing strong values and an extraordinary cohesion. As long as motivation is present, I think we can accomplish wonders or as young people would say, a <em>masterclass</em>...",

        "cv-button-see": "<i class=\"fa-solid fa-eye me-2\"></i>See my resume !",
        "cv-button-download": "<i class=\"fas fa-download me-2\"></i>Download my resume !",

        "contact-subtitle": "A question ? An internship or job offer in game or software dev ?<br/>Do not hesitate to contact me, I will answer you as soon as can !",

        "projects-button-close":"<i class=\"fas fa-xmark fa-fw\"></i>Close",

        "project-6-title": "Rupture",
            "project-6-date": "January - June 2024",
            "project-6-subtitle": "An impactful video game on the theme of Sustainable Development",
            "project-6-description-1": "<strong>Rupture</strong> is a project carried out by a group of 4 students as part of a training as a digital engineer at Télécom SudParis.",
            "project-6-description-2": "In this narrative-style game, you embody the point of view of a humble robot observing the status of society in the near future. While your simple mission is to help a young couple, your task then unexpectedly metamorphoses into a much more important one than mere entertainment.",
            "project-6-description-3": "The primary objective of this project was notably to learn how to use the UnrealEngine 5 engine to create an impactful video game on the theme of Sustainable Development.",
            "project-6-description-4": "The report of our project is available.",

            "project-6-button-download": "<i class=\"fas fa-download me-2\"></i>Download the report",
    }
}

const languageSelector = document.getElementById(LANGUAGE_SELECTOR_ID);

languageSelector.addEventListener('change', (event) => {
    const lang = event.target.value;
    setLanguage(lang);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll(`[${LANGUAGE_NAME_ATTRIBUTE}]`);
    elements.forEach(element => {
        const key = element.getAttribute(LANGUAGE_NAME_ATTRIBUTE);
        if (!translations[language][key]) {
            return;
        }
        element.innerHTML = translations[language][key];
    });
}

setLanguage(DEFAULT_LANGUAGE);

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// alert("This website is under construction. Please check back later.");