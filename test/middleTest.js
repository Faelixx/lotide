const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Cases

const twoValue = [1, 2];
const threeValue = [1, 2, 3];
const fourValue = [1, 2, 3, 4];
const tenValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

assertArraysEqual(middle(twoValue), []);
assertArraysEqual(middle(threeValue), [2]);
assertArraysEqual(middle(fourValue), [2, 3]);
assertArraysEqual(middle(tenValue), [5, 6]);

