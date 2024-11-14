/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/


const PROJECTS_JSON_FILENAME = 'assets/projects.json';
const TEXTS_JSON_FILENAME = 'assets/texts.json';
const DEFAULT_LANGUAGE = 'en';
const LANGUAGE_NAME_ATTRIBUTE = 'translatable-text';
const LANGUAGE_SELECTOR_ID = 'language-selector';


let translations = null;
let all_projects = null;


// Loads projects in the html function
const loadProjects = (projects) => {

    // Cover cards
    const portfolioContainer = document.getElementById('portfolio-grid-container');
    const portfolioPinnedContainer = document.getElementById('portfolio-grid-container-pinned');
    const cardTemplate = document.getElementById('portfolio-card-template');
    // Modals popups
    const portfolioModals = document.getElementById('portfolio-modals');
    const modalTemplate = document.getElementById('portfolio-modal-template');

    try {
        projects.forEach((project, index) => {
        // Clone and populate the cover card template
        const card = cardTemplate.content.cloneNode(true);
        const cardElement = card.querySelector('.portfolio-item');
        cardElement.id = `portfolio-item-${project.id}`;
        cardElement.setAttribute('data-bs-target', '#portfolio-modal-' + project.id);
        const cardImg = cardElement.querySelector('.img-fluid');
        cardImg.src = project.cover_img;
        
        // Add the card to the portfolio container or pinned container (depending on the pinned option)
        const isPinned = project.pinned;
        if (isPinned == "true")
            portfolioPinnedContainer.appendChild(card);
        else
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
        
        // Add the technologies to the modal (no need for translation for now)
        const technologiesContainer = modalElement.querySelector('.project-technologies');
        // If there are properties, add it to the modal
        if (project.technologies.length > 0) {
            project.technologies.forEach(technology => {
                const technologyElement = document.createElement('span');
                technologyElement.classList.add('badge', 'bg-secondary', 'me-1');
                technologyElement.innerHTML = technology;
                technologiesContainer.appendChild(technologyElement);
            });
        }   
        else {
            const technologiesSection = modalElement.querySelector('#project-technologies-section');
            technologiesSection.style.display = 'none';
        }
        
        // Add the actions to the modal
        index = 1;
        buttonContainer = modalElement.querySelector('#project-buttons');
        project.actions.forEach(action => {
            // console.log(action);
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
        setLanguage(DEFAULT_LANGUAGE, modalElement);
        // console.log("Set language for modal", project.id);
        });
    }
    catch (error) {
        console.error(error);
        console.log('Error while loading projects!');

        const errorElement = document.createElement('div');
        errorElement.classList.add('alert', 'alert-danger', 'text-center');
        errorElement.innerHTML = 'Error while loading projects!';
        portfolioContainer.innerHTML = '';
        portfolioContainer.appendChild(errorElement);
    }
};



// Language selector
const languageSelector = document.getElementById(LANGUAGE_SELECTOR_ID);

languageSelector.addEventListener('change', (event) => {
    const lang = event.target.value;
    setLanguage(lang);
});

const setLanguage = (language, node = null) => {
    const root = node || document;
    const elements = root.querySelectorAll(`[${LANGUAGE_NAME_ATTRIBUTE}]`);
    elements.forEach(element => {
        const key = element.getAttribute(LANGUAGE_NAME_ATTRIBUTE);
        if (!translations[language][key]) {
            return;
        }
        element.innerHTML = translations[language][key];
    });
}

const setUserDefaultLanguage = () => {
    const browserLanguage = navigator.language.split('-')[0];
    if (browserLanguage === 'fr') {
        setLanguage('fr');
        languageSelector.value = 'fr';
    }
    else {
        setLanguage(DEFAULT_LANGUAGE);
        languageSelector.value = DEFAULT_LANGUAGE;
    }
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


    // Initiate Texts and Projects
    fetch(TEXTS_JSON_FILENAME)
    .then(response => response.json())
    .then(data => {
        translations = data;
    })
    .then(() => setUserDefaultLanguage())
    .then(() => fetch(PROJECTS_JSON_FILENAME))
    .then(response => response.json())
    .then(data => {
        all_projects = data;
        return all_projects;
    })
    .then(projects => loadProjects(projects));
});