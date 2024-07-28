/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

const ProjectActionType = {
    DOWNLOAD: 'download',
    LINK: 'link',
    UNAVAILABLE: 'unavailable'
}

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


        // Rupture project
        "project-rupture-title": "Rupture",
        "project-rupture-date": "Janvier - Juin 2024",
        "project-rupture-subtitle": "Un jeu vidéo impactant sur le thème du Développement Durable",
        "project-rupture-description-1": "<p><strong>Rupture</strong> est un projet réalisé par un groupe de 4 étudiants dans le cadre d'une formation d'ingénieur du numérique à Télécom SudParis.</p>",
        "project-rupture-description-2": "<p>Dans ce jeu de type narratif, vous incarnez le point de vue d'un modeste robot observant l'état de la société dans un futur proche. Alors que votre mission simple est d'aider un jeune couple, votre tâche se métamorphose alors de manière inattendue en une mission bien plus importante que de simple divertissement.</p><p>L'objectif principal de ce projet était notamment d'apprendre à utiliser le moteur UnrealEngine 5 pour créer un jeu vidéo impactant sur le thème du Développement Durable.</p><p>Le rapport de notre projet est disponible.</p>",
        "project-rupture-action-button": "<i class=\"fas fa-download me-2\"></i>Télécharger le rapport",
    },
    /////////////////////////////////////////////////////////////////////////
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

        // Rupture project
        "project-rupture-title": "Rupture",
        "project-rupture-date": "January - June 2024",
        "project-rupture-subtitle": "An impactful video game on the theme of Sustainable Development",
        "project-rupture-description-1": "<p><strong>Rupture</strong> is a project carried out by a group of 4 students as part of a training as a digital engineer at Télécom SudParis.</p>",
        "project-rupture-description-2": "<p>In this narrative-style game, you embody the point of view of a humble robot observing the status of society in the near future. While your simple mission is to help a young couple, your task then unexpectedly metamorphoses into a much more important one than mere entertainment.</p><p>The primary objective of this project was notably to learn how to use the UnrealEngine 5 engine to create an impactful video game on the theme of Sustainable Development.</p><p>The report of our project is available.</p>",
        "project-rupture-button-download": "<i class=\"fas fa-download me-2\"></i>Download the report",
    }
}


// Project loader
const projects = [
    {
        id: 'rupture',
        cover_img: 'assets/img/portfolio/cabin.png',
        imgs: ['assets/img/portfolio/cabin.png', 'assets/img/portfolio/cake.png', 'assets/img/portfolio/circus.png'],
        // For example download the report
        action: {type: ProjectActionType.LINK, link: 'assets/doc/rupture-report.pdf'}
    }
];


const loadProjects = () => {

    // Cover cards
    const portfolioContainer = document.getElementById('portfolio-grid-container');
    const cardTemplate = document.getElementById('portfolio-card-template');
    // Modals popups
    const portfolioModals = document.getElementById('portfolio-modals');
    const modalTemplate = document.getElementById('portfolio-modal-template');

    projects.forEach((project, index) => {
        // Clone and populate the cover card template
        const card = cardTemplate.content.cloneNode(true);
        const cardElement = card.querySelector('.portfolio-item');
        cardElement.id = `portfolio-item-${project.id}`;
        cardElement.setAttribute('data-bs-target', '#portfolio-modal-' + project.id);
        const cardImg = cardElement.querySelector('.img-fluid');
        cardImg.src = project.cover_img;

        // Add the card to the portfolio container
        portfolioContainer.appendChild(card);


        // Clone and populate the modal template
        const modal = modalTemplate.content.cloneNode(true);
        const modalElement = modal.querySelector('.portfolio-modal');
        modalElement.id = `portfolio-modal-${project.id}`;
        modalElement.setAttribute('aria-labelledby', 'portfolio-modal-' + project.id);

        // Get the text elements with their ids
        // get the title element (id="project-title") and set the translatable text attribute
        const titleElement = modalElement.querySelector('#project-title');
        titleElement.innerHTML = translations[DEFAULT_LANGUAGE][`project-${project.id}-title`];
        titleElement.setAttribute('translatable-text',`project-${project.id}-title`);
        // get the date element (id="project-date") and set the translatable text attribute
        const dateElement = modalElement.querySelector('#project-date');
        dateElement.innerHTML = translations[DEFAULT_LANGUAGE][`project-${project.id}-date`];
        dateElement.setAttribute('translatable-text',`project-${project.id}-date`);
        // get the subtitle element (id="project-subtitle") and set the translatable text attribute
        const subtitleElement = modalElement.querySelector('#project-subtitle');
        subtitleElement.innerHTML = translations[DEFAULT_LANGUAGE][`project-${project.id}-subtitle`];
        subtitleElement.setAttribute('translatable-text',`project-${project.id}-subtitle`);
        // get the description element (id="project-description-1") and set the translatable text attribute
        const descriptionElement1 = modalElement.querySelector('#project-description-1');
        descriptionElement1.innerHTML = translations[DEFAULT_LANGUAGE][`project-${project.id}-description-1`];
        descriptionElement1.setAttribute('translatable-text',`project-${project.id}-description-1`);
        // get the description element (id="project-description-2") and set the translatable text attribute
        const descriptionElement2 = modalElement.querySelector('#project-description-2');
        descriptionElement2.innerHTML = translations[DEFAULT_LANGUAGE][`project-${project.id}-description-2`];
        descriptionElement2.setAttribute('translatable-text',`project-${project.id}-description-2`);
        // Add the images to the modal

        //const carousel = modalElement.querySelector('.carousel-inner');
        const carousel = modalElement.querySelector('#project-carousel');

        project.imgs.forEach((img, index) => {
            // const carouselItem = document.createElement('div');
            // carouselItem.classList.add('carousel-item');
            // if (index === 0) {
            //     carouselItem.classList.add('active');
            // }
            carousel.innerHTML += `<img src="${img}" class="d-block w-100" alt="...">`;
            // if (index === 0) {
            //     carouselItem.classList.add('active');
            // }
            // carousel.appendChild(carouselItem);
        });

        projectBody = modalElement.querySelector('#project-body');

        // Get the template corresponding to the project action type
        const buttonTemplate = modalElement.querySelector('#project-button-' + project.action.type);
        buttonNode = buttonTemplate.content.cloneNode(true);
        button = buttonNode.querySelector('.btn');
        button.setAttribute('href', project.action.link);
        button.setAttribute('translatable-text', 'project-' + project.id + '-action-button');
        projectBody.appendChild(button);

        // Add the modal to the modals container
        portfolioModals.appendChild(modal);
    });

    };



// Language selector
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
    
    // Load projects
    loadProjects();
    setLanguage(DEFAULT_LANGUAGE);
    
});

// alert("This website is under construction. Please check back later.");