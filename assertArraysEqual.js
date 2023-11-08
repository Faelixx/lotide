const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  // Function output into a variable to create a comparison.
  let arrayCheck = eqArrays(arr1, arr2);
  if (arrayCheck === true) {
    console.log(`╰(*°▽°*)╯ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`(┬┬﹏┬┬) Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


module.exports = assertArraysEqual;