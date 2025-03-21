# Comprehensive JavaScript Arrays Note

This note consolidates **all array-related discussions**, covering usage, methods, shallow vs. deep copies, and more.

---

## 1. Array Basics
- **Definition**: Arrays allow storing multiple values (of varying data types) in a single variable.
- **Zero-indexed**: The first element is at index `0`, and the last is at index `length - 1`.
- **Mixed Data Types**: You can store numbers, strings, booleans, objects, etc.
- **Not Associative**: Must use numeric indexes to access array elements.

**Example**:
```js
const example = [1, 'two', true, { key: 'value' }];
console.log(example[0]); // 1
console.log(example[3]); // { key: 'value' }
console.log(example.length); // 4
```

---

## 2. The `for...of` Loop

- **Purpose**: Iterate over the **values** of an iterable object (arrays, strings, maps, sets).
- **Returns**: Element values, not their indexes.

**Example**:
```js
const fruits = ['Apple', 'Banana', 'Cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry
```

**Getting Index and Value**:
```js
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}
// 0 'Apple'
// 1 'Banana'
// 2 'Cherry'
```

---

## 3. Accessing Elements in 2D Arrays

For a **two-dimensional array** (or matrix), use two indexes: `matrix[row][column]`.

**Example**:
```js
const matrix = [
  [1, 2, 3],  // row 0
  [4, 5, 6],  // row 1
  [7, 8, 9]   // row 2
];

console.log(matrix[1][2]); // 6
// Explanation:
// matrix[1] -> [4, 5, 6]
// matrix[1][2] -> 6
```

---

## 4. Differences Between `splice()` and `slice()`

### `slice()` (Non-Mutating)
- **Purpose**: Extracts a portion of the array.
- **Does NOT modify** the original array; returns a new array.

```js
const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3); // [2, 3]
console.log(arr);      // [1, 2, 3, 4] (unchanged)
```

### `splice()` (Mutating)
- **Purpose**: Add/remove elements at a given index.
- **Modifies** the original array.

```js
const arr = [1, 2, 3, 4];
const spliced = arr.splice(1, 2); // Removes elements at index 1 & 2
console.log(spliced); // [2, 3]
console.log(arr);     // [1, 4] (changed)
```

---

## 5. Mutating vs. Non-Mutating Methods

- **Mutating Methods** (change the original array):
  - `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`

- **Non-Mutating Methods** (return a new array, leaving the original unchanged):
  - `slice()`, `map()`, `filter()`, `reduce()`, `concat()`, `toReversed()`, `toSorted()`, etc.

**Example**:
```js
// Non-mutating
const arr = [1, 2, 3];
const newArr = arr.map(num => num * 2);
console.log(newArr); // [2, 4, 6]
console.log(arr);    // [1, 2, 3]

// Mutating
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

---

## 6. Shallow vs. Deep Copies

### Shallow Copy
- Copies only top-level references.
- Nested objects/arrays remain **shared** with the original.

```js
const original = [{ name: "Mike" }, { name: "Jane" }];
const shallowCopy = original.slice(); // or [...original]

shallowCopy[0].name = "Ali";

// Both original and shallowCopy see the change:
console.log(original[0].name); // 'Ali'
console.log(shallowCopy[0].name); // 'Ali'
```

### Deep Copy
- Copies **everything**, including nested objects.
- Changes in the copy won’t affect the original.

```js
const original = [{ name: "Mike" }, { name: "Jane" }];
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy[0].name = "Ali";
console.log(original[0].name); // 'Mike' (unchanged)
console.log(deepCopy[0].name); // 'Ali'
```

**Note**: `JSON.parse(JSON.stringify(...))` can break certain data (e.g., Dates, Functions). For complex data, consider `structuredClone()` or a custom deep clone.

---

## 7. Additional Tips
- **Sparse Arrays**: Arrays with missing elements (e.g., `[1,,3]`) can behave differently in iteration.
- **Array-Like Objects**: Certain objects (like `arguments`, `NodeList`) can be converted to arrays with `Array.from()`.
- **Multi-Dimensional**: You can have arrays within arrays (e.g., 2D, 3D) for matrices, tables, or grids.

---

## 8. Quick Examples Recap

### Create a Copy Without Mutating Original
```js
const arr = ["a", "b", "c"];
const copy = arr.slice();   // or [...arr], Array.from(arr)
```

### Merge Two Arrays
```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2); // [1, 2, 3, 4]
```

### Using `forEach()` to Iterate
```js
arr.forEach((element, index) => {
  console.log(index, element);
});
```

### Checking for Inclusion
```js
console.log(arr.includes("b")); // true
console.log(arr.indexOf("c") !== -1); // true
```

---

# End of Comprehensive Note

This document collates **all array-related insights** from the conversation, including `for...of`, 2D array indexing, splice vs slice, shallow vs deep copies, and mutating vs non-mutating methods. Enjoy coding with arrays!

