export const createProject = (name) => {
    return {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name,
        todos: [],
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(todoId) {
            this.todos = this.todos.filter(todo => todo.id !== todoId);
        },
        getTodo(todoId) {
            return this.todos.find(todo => todo.id === todoId);
        }
    };
};
