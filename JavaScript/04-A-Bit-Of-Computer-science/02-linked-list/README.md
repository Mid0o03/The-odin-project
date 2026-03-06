# Linked List Implementation

This directory contains a JavaScript implementation of a Singly Linked List data structure.

## Features
The `LinkedList` class provides the following methods to manipulate the list:
- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given `index`.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns true if the passed `value` is in the list and otherwise returns false.
- `find(value)`: Returns the index of the node containing `value`, or null if not found.
- `toString()`: Represents your LinkedList objects as strings, so you can print them out and preview them in the console (format: `( value ) -> ( value ) -> ( value ) -> null`).
- `insertAt(value, index)`: Inserts a new node with the provided `value` at the given `index`.
- `removeAt(index)`: Removes the node at the given `index`.
- `delete(value)`: Removes the first node that contains the given `value`.

## Structure
The implementation uses two main classes:
1. `Node`: Represents an individual element in the linked list containing a `value` and a reference to the `nextNode`.
2. `LinkedList`: Manages the state of the list and provides the manipulation methods.
