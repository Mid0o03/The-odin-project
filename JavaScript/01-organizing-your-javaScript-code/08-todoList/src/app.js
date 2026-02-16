import { createProject } from './project';
import { createTodo } from './todo';
import { saveProjects, loadProjects } from './persistence';
import { renderProjects, renderTodos } from './dom';

const initializeApp = () => {
    let projects = loadProjects();

    // Initialize default project if no data
    if (!projects || projects.length === 0) {
        const defaultProject = createProject('Default Project');
        projects = [defaultProject];
        saveProjects(projects);
    }

    // Convert plain objects back to objects with methods if needed (store only data, methods in factories)
    // NOTE: In this simple implementation, we might need to re-attach methods or just use pure data objects.
    // The factories return objects with methods, but JSON.stringify/parse strips them.
    // Simpler approach for this exercise: separate data and logic, OR re-hydrate.
    // Let's use a Hybrid approach: helper functions to act on data objects.

    // Actually, looking at my factory design, I put methods on the objects (toggleComplete, addTodo).
    // These are lost on reload. I should probably move these methods to standalone functions or re-attach them.
    // For simplicity given the instruction level, I will re-implement the logic here or use helper functions.
    // Let's stick to the factories for creation, but for manipulation of loaded data, we'll use helper functions
    // defined here or in a separate 'logic' module.
    // To keep it clean, I'll just manipulate the arrays directly in the controller for now.

    let activeProjectId = projects[0].id;

    // DOM Elements
    const addProjectBtn = document.getElementById('add-project');
    const addTodoBtn = document.getElementById('add-todo');
    const projectFormContainer = document.getElementById('new-project-form');
    const todoFormContainer = document.getElementById('new-todo-form');

    // Render initial state
    const updateUI = () => {
        saveProjects(projects);
        renderProjects(projects, activeProjectId, handleProjectSelect, handleProjectDelete);
        const activeProject = projects.find(p => p.id === activeProjectId);
        renderTodos(activeProject, handleTodoToggle, handleTodoDelete, handleTodoEdit);
    };

    // Event Handlers
    const handleProjectSelect = (id) => {
        activeProjectId = id;
        updateUI();
    };

    const handleProjectDelete = (id) => {
        projects = projects.filter(p => p.id !== id);
        if (activeProjectId === id) {
            activeProjectId = projects.length > 0 ? projects[0].id : null;
        }
        updateUI();
    };

    const handleTodoToggle = (projectId, todoId) => {
        const project = projects.find(p => p.id === projectId);
        const todo = project.todos.find(t => t.id === todoId);
        if (todo) {
            todo.completed = !todo.completed;
            updateUI();
        }
    };

    const handleTodoDelete = (projectId, todoId) => {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            project.todos = project.todos.filter(t => t.id !== todoId);
            updateUI();
        }
    };

    const handleTodoEdit = (projectId, todoId) => {
        // Placeholder for edit logic
        console.log('Edit todo', todoId);
    };

    // Form handling
    // We need to create the modal/form HTML first or do it via JS. 
    // To save time, I'll use simple prompts for this iteration, 
    // or I can inject a simple form into the DOM.
    // Let's implement simple "Add" buttons that prompt for now to prove logic, 
    // then enhance UI if time permits.

    // Attach global listeners
    document.getElementById('add-project-btn').addEventListener('click', () => {
        const name = prompt('Nom du projet:');
        if (name) {
            const newProject = createProject(name);
            // Remove methods before saving to avoid confusion, or just accept they won't persist
            const projectData = {
                id: newProject.id,
                name: newProject.name,
                todos: []
            };
            projects.push(projectData);
            activeProjectId = newProject.id;
            updateUI();
        }
    });

    document.getElementById('add-task-btn').addEventListener('click', () => {
        const activeProject = projects.find(p => p.id === activeProjectId);
        if (!activeProject) return alert('Sélectionnez un projet d\'abord');

        const title = prompt('Titre de la tâche:');
        if (title) {
            const date = prompt('Date limite (YYYY-MM-DD):', new Date().toISOString().split('T')[0]);
            const priority = prompt('Priorité (low, medium, high):', 'medium');

            const newTodo = createTodo(title, '', date, priority);
            // Re-creating raw data object
            const todoData = {
                id: newTodo.id,
                title: newTodo.title,
                description: newTodo.description,
                dueDate: newTodo.dueDate,
                priority: newTodo.priority,
                notes: newTodo.notes,
                checklist: newTodo.checklist,
                completed: false
            };

            activeProject.todos.push(todoData);
            updateUI();
        }
    });

    updateUI();
};

export default initializeApp;
