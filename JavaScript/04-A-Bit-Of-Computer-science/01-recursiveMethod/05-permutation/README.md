# Array Permutations

This exercise implements a recursive function to generate all possible permutations of an array.

## Features
- Generates permutations recursively using a swapping algorithm via array destructuring.
- Returns an array containing all arrangements of the original array items.
- Modifies and restores array state across recursive calls.

## Example
```javascript
permutations([1, 2, 3]);
// returns [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 2, 1],
//   [3, 1, 2]
// ]
```
