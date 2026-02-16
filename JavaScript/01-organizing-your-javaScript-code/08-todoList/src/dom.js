import { format } from 'date-fns';

export const renderProjects = (projects, activeProjectId, onProjectSelect, onProjectDelete) => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.dataset.id = project.id;
        if (project.id === activeProjectId) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => onProjectSelect(project.id));

        // Don't verify delete for default project if you want to implement that restriction
        // Button delete
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '×';
        deleteBtn.classList.add('delete-project');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            onProjectDelete(project.id);
        });

        li.appendChild(deleteBtn);
        projectList.appendChild(li);
    });
};

export const renderTodos = (project, onTodoToggle, onTodoDelete, onTodoEdit) => {
    const todoList = document.getElementById('todo-list');
    const projectTitle = document.getElementById('project-title');

    todoList.innerHTML = '';

    if (!project) {
        projectTitle.textContent = 'Sélectionnez un projet';
        return;
    }

    projectTitle.textContent = project.name;

    if (project.todos.length === 0) {
        todoList.innerHTML = '<p class="empty-message">Aucune tâche dans ce projet.</p>';
        return;
    }

    project.todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item', todo.priority);
        if (todo.completed) todoItem.classList.add('completed');

        const leftSection = document.createElement('div');
        leftSection.classList.add('todo-left');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => onTodoToggle(project.id, todo.id));

        const title = document.createElement('span');
        title.classList.add('todo-title');
        title.textContent = todo.title;

        leftSection.appendChild(checkbox);
        leftSection.appendChild(title);

        const rightSection = document.createElement('div');
        rightSection.classList.add('todo-right');

        const date = document.createElement('span');
        date.classList.add('todo-date');
        if (todo.dueDate) {
            try {
                date.textContent = format(new Date(todo.dueDate), 'dd/MM/yyyy');
            } catch (e) {
                date.textContent = todo.dueDate;
            }
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => onTodoDelete(project.id, todo.id));

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Détails';
        editBtn.classList.add('edit-btn');
        // Simple alert for now, can be expanded to modal
        editBtn.addEventListener('click', () => alert(`Description: ${todo.description}\nNotes: ${todo.notes}`));

        rightSection.appendChild(date);
        rightSection.appendChild(editBtn);
        rightSection.appendChild(deleteBtn);

        todoItem.appendChild(leftSection);
        todoItem.appendChild(rightSection);

        todoList.appendChild(todoItem);
    });
};
