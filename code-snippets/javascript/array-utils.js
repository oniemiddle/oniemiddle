#!/usr/bin/env node
/**
 * Array utilities for JavaScript/Node.js
 * Common array manipulation functions
 */

// Remove duplicates
function unique(arr) {
  return [...new Set(arr)];
}

// Flatten array
function flatten(arr, depth = Infinity) {
  return arr.flat(depth);
}

// Chunk array into smaller arrays
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// Shuffle array
function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get random element
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Group by property
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const group = typeof key === 'function' ? key(item) : item[key];
    (result[group] = result[group] || []).push(item);
    return result;
  }, {});
}

// Partition array by condition
function partition(arr, predicate) {
  return arr.reduce(
    ([pass, fail], item) => 
      predicate(item) ? [[...pass, item], fail] : [pass, [...fail, item]],
    [[], []]
  );
}

// Count occurrences
function countBy(arr, key) {
  return arr.reduce((result, item) => {
    const group = typeof key === 'function' ? key(item) : item[key];
    result[group] = (result[group] || 0) + 1;
    return result;
  }, {});
}

// Find intersection of arrays
function intersection(...arrays) {
  return arrays.reduce((a, b) => a.filter(x => b.includes(x)));
}

// Find difference between arrays
function difference(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
}

// Example usage
if (require.main === module) {
  console.log('Array Utilities - Example Usage');
  console.log('-'.repeat(40));
  
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  console.log('unique([1,2,2,3,4,4,5]):', unique(numbers));
  
  const nested = [1, [2, 3], [4, [5, 6]]];
  console.log('flatten([1,[2,3],[4,[5,6]]]):', flatten(nested));
  
  const arr = [1, 2, 3, 4, 5, 6];
  console.log('chunk([1,2,3,4,5,6], 2):', chunk(arr, 2));
  
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
  ];
  console.log('groupBy by age:', groupBy(people, 'age'));
}

// Export functions
module.exports = {
  unique,
  flatten,
  chunk,
  shuffle,
  randomElement,
  groupBy,
  partition,
  countBy,
  intersection,
  difference
};
