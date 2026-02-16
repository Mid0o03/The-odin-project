# 08 - Todo List

A fully functional Todo List application featuring project management and data persistence.

## Features
- **Create Projects**: Organize your tasks into separate projects.
- **Manage Tasks**: Add tasks with titles, priorities, and due dates.
- **Persistence**: All data is saved to `localStorage`, so you never lose your list.
- **Responsive UI**: A clean interface with a sidebar for easy navigation.

## Architecture
- **Modular Design**: Separation of concerns between Application Logic, DOM Manipulation, and Storage.
- **Factories**: Uses Factory Functions for creating Todo and Project objects.
- **Date-fns**: Utilizes external library for robust date handling.

## Installation

```bash
npm install
npm run build
```

Open `dist/index.html` to start using the app.
