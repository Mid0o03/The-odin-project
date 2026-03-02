# Total Integers Count

This directory contains a recursive function `totalIntegers` that parses a multi-dimensional array or nested object and returns the total number of integers stored inside it.

## Features
- Recursively traverses objects and arrays.
- Counts only primitive integer types, ignoring strings, floats, and other data types.
- Handles heterogeneous data structures robustly.

## Example
```javascript
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
```
