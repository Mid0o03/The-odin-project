export const createTodo = (title, description, dueDate, priority, notes = '', checklist = []) => {
    return {
        id: Date.now().toString(),
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
        completed: false,
        toggleComplete() {
            this.completed = !this.completed;
        }
    };
};
