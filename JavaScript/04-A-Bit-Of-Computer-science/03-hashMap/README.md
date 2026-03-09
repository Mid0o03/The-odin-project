# HashMap Implementation

This is a JavaScript implementation of a HashMap (Hash Table) data structure, created as part of [The Odin Project's](https://www.theodinproject.com/lessons/javascript-hashmap) Computer Science curriculum.

## Features

This implementation includes handling collisions using a Linked List (chaining) approach and supports dynamic resizing when the load factor is exceeded.

### Methods Implemented

- `hash(key)`: Takes a key and produces a hash code.
- `set(key, value)`: Takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.
- `get(key)`: Takes one argument as a key and returns the value that is assigned to this key. If key is not found, return `null`.
- `has(key)`: Takes a key as an argument and returns `true` or `false` based on whether or not the key is in the hash map.
- `remove(key)`: Takes a key as an argument. If the given key is in the hash map, it removes the entry with that key and return `true`. If the key isn't in the hash map, it returns `false`.
- `length()`: Returns the number of stored keys in the hash map.
- `clear()`: Removes all entries in the hash map.
- `keys()`: Returns an array containing all the keys inside the hash map.
- `values()`: Returns an array containing all the values.
- `entries()`: Returns an array that contains each `key, value` pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`

## Internal Logic

- **Collisions**: Managed using a simple `Node` class. Each bucket in the table stores a linked list of nodes if collisions occur.
- **Resizing**: When the assigned nodes in the hash map reach the **load factor** (0.75 by default), the hash map's capacity will double and all existing nodes will be re-hashed and re-distributed into the new, larger set of buckets.
