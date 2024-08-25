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

const PROJECTS_JSON_FILENAME = 'assets/projects.json';
const DEFAULT_LANGUAGE = 'fr';
const LANGUAGE_NAME_ATTRIBUTE = 'translatable-text';
const LANGUAGE_SELECTOR_ID = 'language-selector';

const translations = {
    fr: {
        "last-updated": "Dernière mise à jour : ",

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
        "project-rupture-action-button-1": "Télécharger le rapport",
        "project-rupture-action-button-2": "Voir le rapport",

        // Shipping Time project
        "project-shipping-time-title": "Shipping Time",
        "project-shipping-time-date": "Avril 2024",
        "project-shipping-time-subtitle": "Contrôlez le temps autant que la météo dans ce jeu de rythme à réaction",
        "project-shipping-time-description-1": "Développé en 48h durant l'évènement <a href=\"https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/\"><strong>INT Game Jam 2024</strong></a> qui a été géré de façon autonome par un groupe de 9 étudiants, <strong>Shipping Time</strong> a été pensé et conçu par une équipe de 5 jammeurs dans le thème de cette année \"Jouer avec le temps\".",
        "project-shipping-time-description-2": "<p class=\"mb-4\">Dans ce jeu de rythme à réaction, vous incarnez un bateau qui doit contrôler le temps autant que la météo pour livrer des colis à temps.</p><p class=\"mb-4\">Ayant eu quelques difficultés techniques, le jeu n'a pas pu être achevé comme nous l'avons souhaité, mais malgré quelques bugs, nous avons été satisfaits d'un jeu ayant une boucle de jeu terminée et qui correspondait au global à ce qu'on attendait.</p>",
        "project-shipping-time-action-button-1": "Page du projet (Itch.io)",

        // The Legend of Blo project
        "project-the-legend-of-blo-title": "The Legend Of Blo : the voice in your head",
        "project-the-legend-of-blo-date": "Janvier 2024",
        "project-the-legend-of-blo-subtitle": "Arrivez au bout de votre quête tout en supportant un narrateur chevronné",
        "project-the-legend-of-blo-description-1": "Développé en 48h durant la <a href=\"https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/\"><strong>Global Game Jam 2024</strong></a>, c'est une équipe de 6 étudiants qui a donné naissance à <strong>The Legend Of Blo : the voice in your head</strong>. Un jeu fourré de bugs (intentionnels ?) orienté narratif où un narrateur plutôt spécial vous accompagne dans votre quête. Ce jeu a été donc réalisé face au thème de l'année \"Make me laugh\".",
        "project-the-legend-of-blo-description-2": "<p class=\"mb-4\">Le projet a été très amusant à produire, nous avons beaucoup rigolé avec toute l'équipe durant le développement de ce jeu. Allant des bugs intentionnels aux non-intentionnels, les rires circulaient sur la table. Nous avons donc appris à reconnaître une chose importante ce jour là : ce n'est pas un bug, c'est une feature !</p><p class=\"mb-4\">Nous avons été très fier du jeu à son état final. Je suis personnellement très fier d'avoir réussi à monter le système de dialogue modulaire pour ce jeu.</p>",
        "project-the-legend-of-blo-action-button-1": "Page du projet (Itch.io)",

        // Magic Circus project
        "project-magic-circus-title": "Magic Circus",
        "project-magic-circus-date": "Novembre 2023 - Janvier 2024",
        "project-magic-circus-subtitle": "Guidez et coordonnez vos unités pour capturer le drappeau grâce à leurs compétences spéciales",
        "project-magic-circus-description-1": "Ce projet a été réalisé en duo dans le cadre de notre deuxième année d'école d'ingénieur du numérique, dans le cours d'Architectures et Moteurs de Jeux Vidéos à Télécom SudParis. La création de ce jeu nous a permis de prouver nos compétences en matière d'utilisation du moteur Unity pour créer un jeu simple présentant une qualité minimale.",
        "project-magic-circus-description-2": "Pour son développement, nous avons du associer nos expériences passées avec Unity avec la découverte de nouveaux outils permise par le module proposé par notre école (notamment le Nav-Mesh qui permet la navigation d'un ordinateur sur un terrain).",
        "project-magic-circus-action-button-1": "Page du projet (Itch.io)",

        // Translimation project
        "project-translimation-title": "Translimation",
        "project-translimation-date": "Novembre 2023",
        "project-translimation-subtitle": "Incarnez un petit slime dans tous ses états",
        "project-translimation-description-1": "Ce jeu a été réalisé en 48 heures à l'occasion de l'évènement <a href=\"https://itch.io/jam/unijam2023\"><strong>Unijam FR 2023</strong></a> avec le thème de cette année \"Tout se tranforme\".",
        "project-translimation-description-2": "L'idée que nous avons eu a été alors d'incarner un petit slime de laboratoire où son but est de se forger sa propre liberté en s'échappant du labo. Mais un slime ça colle, et ça ne saute pas haut. Pas de panique, il existe des sources de chaleur et de froid qui altereront votre état. Chaque état a ses avantages et ses inconvénients ! Mais attention à ne pas prendre trop de temps : chaque salle a sa propre température, et elle vous ramènera constament au même état après un certain temps.",
        "project-translimation-action-button-1": "Page du projet (Itch.io)",

        // Exploding Tree project
        "project-exploding-tree-title": "Exploding Tree",
        "project-exploding-tree-date": "Février 2023",
        "project-exploding-tree-subtitle": "Défendez l'arbre sacré dans ce tower défense où git à eu raison de nous",
        "project-exploding-tree-description-1": "Ce jeu a été réalisé en 48 heures dans une équipe de 6 à l'occasion de la <a href=\"https://itch.io/jam/unijam2023\"><strong>Global Game Jam 2023</strong></a> avec le thème de cette année \"Roots\".",
        "project-exploding-tree-description-2": "<p class=\"mb-4\">Cette game jam a été la première pour toute l'équipe. L'utilisation de GIT (logiciel de gestion de version de fichier, indispensable pour travailler en équipe) était également nouvelle à ce temps. C'est à ce moment là que nous avons commencé à le prendre en main.</p><p class = \"mb-4\">Le jeu n'a finalement pas pu aboutir, car trop de problèmes avaient été rencontrés avec GIT. Malheureusement, à cet époque, nous ne connaissions pas assez les méthodes pour s'en sortir, mais il est intéressant de remarquer que, restrospectivement à aujourd'hui, nous aurions pu corriger le problème d'avant avec notre maîtrise actuelle.</p>",
        "project-exploding-tree-action-button-1": "Page du projet (Github)",
    },
    /////////////////////////////////////////////////////////////////////////
    en: {
        "last-updated": "Last update: ",

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
        "project-rupture-action-button-1": "Download the report",
        "project-rupture-action-button-2": "See the report",

        // Shipping Time project
        "project-shipping-time-title": "Shipping Time",
        "project-shipping-time-date": "April 2024",
        "project-shipping-time-subtitle": "Control time as much as the weather in this rhythm reaction game",
        "project-shipping-time-description-1": "Developed in 48 hours during the <a href=\"https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/\"><strong>INT Game Jam 2024</strong></a> event which was managed autonomously by a group of 9 students, <strong>Shipping Time</strong> was conceived and designed by a team of 5 jammers in this year's theme \"Playing with time\".",
        "project-shipping-time-description-2": "<p class=\"mb-4\">In this rhythm reaction game, you embody a boat that must control time as much as the weather to deliver packages on time.</p><p class=\"mb-4\">Having had some technical difficulties, the game could not be completed as we wished, but despite some bugs, we were satisfied with a game having a completed gameplay loop and which corresponded globally to what we expected.</p>",
        "project-shipping-time-action-button-1": "Project page (Itch.io)",

        // The Legend of Blo project
        "project-the-legend-of-blo-title": "The Legend Of Blo : the voice in your head",
        "project-the-legend-of-blo-date": "January 2024",
        "project-the-legend-of-blo-subtitle": "Complete your quest while supporting a seasoned narrator",
        "project-the-legend-of-blo-description-1": "Developed in 48 hours during the <a href=\"https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/\"><strong>Global Game Jam 2024</strong></a>, it is a team of 6 students who gave birth to <strong>The Legend Of Blo : the voice in your head</strong>. A game full of bugs (intentional ?) narrative-oriented where a rather special narrator accompanies you in your quest. This game was therefore created in the face of this year's theme \"Make me laugh\".",
        "project-the-legend-of-blo-description-2": "<p class=\"mb-4\">The project was very fun to produce, we laughed a lot with the whole team during the development of this game. From intentional to unintentional bugs, laughter circulated on the table. We therefore learned to recognize an important thing that day: it's not a bug, it's a feature !</p><p class=\"mb-4\">We were very proud of the game in its final state. I am personally very proud to have managed to set up the modular dialogue system for this game.</p>",
        "project-the-legend-of-blo-action-button-1": "Project page (Itch.io)",

        // Magic Circus project
        "project-magic-circus-title": "Magic Circus",
        "project-magic-circus-date": "November 2023 - January 2024",
        "project-magic-circus-subtitle": "Guide and coordinate your units to capture the flag using their special skills",
        "project-magic-circus-description-1": "This project was carried out in pairs as part of our second year of digital engineering school, in the Game Architectures and Engines course at Télécom SudParis. The creation of this game allowed us to prove our skills in using the Unity engine to create a simple game with minimal quality.",
        "project-magic-circus-description-2": "For its development, we had to combine our past experiences with Unity with the discovery of new tools made possible by the module offered by our school (notably the Nav-Mesh which allows the navigation of a computer on a terrain).",
        "project-magic-circus-action-button-1": "Project page (Itch.io)",

        // Translimation project
        "project-translimation-title": "Translimation",
        "project-translimation-date": "November 2023",
        "project-translimation-subtitle": "Play as a little slime in all its states",
        "project-translimation-description-1": "This game was created in 48 hours during the <a href=\"https://itch.io/jam/unijam2023\"><strong>Unijam FR 2023</strong></a> event with this year's theme \"Everything transforms\".",
        "project-translimation-description-2": "The idea we had was then to embody a small laboratory slime where its goal is to forge its own freedom by escaping from the lab. But a slime sticks, and doesn't jump high. Don't panic, there are sources of heat and cold that will alter your state. Each state has its advantages and disadvantages ! But be careful not to take too long: each room has its own temperature, and it will constantly bring you back to the same state after a certain time.",
        "project-translimation-action-button-1": "Project page (Itch.io)",

        // Exploding Tree project
        "project-exploding-tree-title": "Exploding Tree",
        "project-exploding-tree-date": "February 2023",
        "project-exploding-tree-subtitle": "Defend the sacred tree in this tower defense where git got the best of us",
        "project-exploding-tree-description-1": "This game was created in 48 hours in a team of 6 during the <a href=\"https://itch.io/jam/unijam2023\"><strong>Global Game Jam 2023</strong></a> with this year's theme \"Roots\".",
        "project-exploding-tree-description-2": "<p class=\"mb-4\">This game jam was the first for the whole team. The use of GIT (file version management software, essential for working in a team) was also new at the time. It was at this moment that we started to take it in hand.</p><p class = \"mb-4\">The game finally could not be completed, because too many problems were encountered with GIT. Unfortunately, at that time, we did not know enough methods to get out of it, but it is interesting to note that, retrospectively to today, we could have corrected the previous problem with our current mastery.</p>",
        "project-exploding-tree-action-button-1": "Project page (Github)",
    }
}


const loadProjects = (projects) => {

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


        // Add the actions to the modal
        index = 1;
        buttonContainer = modalElement.querySelector('#project-buttons');
        project.actions.forEach(action => {
            console.log(action);
            const buttonTemplate = modalElement.querySelector('#project-button-' + action.type.toLowerCase());
            buttonNode = buttonTemplate.content.cloneNode(true);
            button = buttonNode.querySelector('.btn');
            button.setAttribute('href', action.link);
            buttonText = button.querySelector('#project-button-text');
            buttonText.setAttribute('translatable-text', 'project-' + project.id + '-action-button-'+index);
            if (index > 1)
                button.classList.add('ms-2');
            buttonContainer.appendChild(button);
            index++;
        });

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
    
    // Load JSON data from the root folder
    fetch(PROJECTS_JSON_FILENAME)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(json_projects => {
            // Use the JSON json_projects
            console.log(json_projects); // For debugging
            loadProjects(json_projects);
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Load projects
    setLanguage(DEFAULT_LANGUAGE);
    
});

// alert("This website is under construction. Please check back later.");