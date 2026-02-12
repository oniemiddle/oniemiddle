#!/usr/bin/env node
/**
 * String utilities for JavaScript/Node.js
 * Common string manipulation functions
 */

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Title case
function titleCase(str) {
  return str.toLowerCase().split(' ')
    .map(word => capitalize(word))
    .join(' ');
}

// Snake case to camel case
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Camel case to snake case
function camelToSnake(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// Kebab case to camel case
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Truncate string
function truncate(str, maxLength, suffix = '...') {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

// Remove extra spaces
function cleanSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}

// Reverse string
function reverse(str) {
  return str.split('').reverse().join('');
}

// Check if palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverse(cleaned);
}

// Count words
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

// Generate slug
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Example usage
if (require.main === module) {
  console.log('String Utilities - Example Usage');
  console.log('-'.repeat(40));
  
  const testStr = 'hello world';
  console.log(`capitalize("${testStr}"):`, capitalize(testStr));
  console.log(`titleCase("${testStr}"):`, titleCase(testStr));
  
  const snakeStr = 'hello_world_test';
  console.log(`snakeToCamel("${snakeStr}"):`, snakeToCamel(snakeStr));
  
  const longStr = 'This is a very long string that needs truncation';
  console.log(`truncate("${longStr}", 20):`, truncate(longStr, 20));
  
  console.log(`slugify("Hello World! 123"):`, slugify('Hello World! 123'));
}

// Export functions
module.exports = {
  capitalize,
  titleCase,
  snakeToCamel,
  camelToSnake,
  kebabToCamel,
  truncate,
  cleanSpaces,
  reverse,
  isPalindrome,
  wordCount,
  slugify
};
