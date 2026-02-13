# JavaScript Exercise: Cuisiner (Kitchen)

A simple JavaScript exercise to practice **Factory Functions** and private State management.

## Project Overview

This exercise demonstrates how to use Factory Functions to create objects with internal state and exposed methods. In this case, it simulates a chef ("Cuisiner") who can prepare dishes and report on their progress.

## Concepts Practiced

- **Factory Functions**: Using a function to return a new object instance without using the `new` keyword or classes.
- **Private Variables**: Using closures to create variables (like `platsPrepares`) that are inaccessible from outside the object.
- **Object Methods**: Exposing specific functionality through a returned object.

## How it Works

The `Cuisiner` function takes a name as an argument and returns an object with:
- `nom`: The name of the chef.
- `preparePlat()`: A method to increment the internal dish counter.
- `afficherBilan()`: A method to log the total number of dishes prepared.
