const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual'); 

// Test Case

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([2, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([2, 2, 3, 5, 7], [2, 2, 3, 5, 7]), true);