export const saveProjects = (projects) => {
    localStorage.setItem('todoListProjects', JSON.stringify(projects));
};

export const loadProjects = () => {
    const projectsJSON = localStorage.getItem('todoListProjects');
    if (!projectsJSON) return null;
    return JSON.parse(projectsJSON);
};
