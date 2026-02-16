import './style.css';
import initializeApp from './app';

document.addEventListener('DOMContentLoaded', () => {
    // Basic Layout injection
    const appHTML = `
    <div id="sidebar">
        <h2>Mes Projets</h2>
        <ul id="project-list"></ul>
        <button id="add-project-btn">+ Nouveau Projet</button>
    </div>
    <div id="main">
        <h1 id="project-title">Projet</h1>
        <div class="controls">
            <button id="add-task-btn">+ Nouvelle Tâche</button>
        </div>
        <div id="todo-list"></div>
    </div>
    `;

    document.body.innerHTML = appHTML;

    initializeApp();
});
