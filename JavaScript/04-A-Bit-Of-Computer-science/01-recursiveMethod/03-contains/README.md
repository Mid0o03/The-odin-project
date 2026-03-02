# Object Contains Function

This exercise demonstrates a recursive function called `contains` that searches for a specific value within a nested JavaScript object.

## Features
- Recursively searches through all values in an object.
- Handles deeply nested objects of any depth.
- Returns `true` if the value is found, and `false` otherwise.

## Example
```javascript
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
};

contains(nestedObject, 44); // returns true
contains(nestedObject, "bar"); // returns false
```
