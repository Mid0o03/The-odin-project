import './style.css';
import { loadHome } from './accueil.js';
import { loadMenu } from './menu.js';
// import { loadContact } from './contact.js';

const initialLoad = () => {
    // 1. On crée les boutons de navigation (ou on les cible s'ils sont dans le HTML)
    // 2. On charge la page par défaut
    loadHome();
    setupNavigation();
};

const setupNavigation = () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    // const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    // contactBtn.addEventListener('click', loadContact);
};

initialLoad();