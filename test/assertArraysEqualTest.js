const assertArraysEqual = require('../assertArraysEqual');

// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [2, 2, 3]);
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 5, 6, 7]);