const eqArrays = function(arr1, arr2) {
  // Check if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  // Function output into a variable to create a comparison.
  let arrayCheck = eqArrays(arr1, arr2);
  if (arrayCheck === true) {
    console.log(`╰(*°▽°*)╯ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`(┬┬﹏┬┬) Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

/* I want to create a function that takes an array with nested arrays
and flattens it into one single level array.
*/

// Create a function that receives the array input

const flatten = function(arr1) {
// Make an empty array to merge the arrays
  let flattened = [];
  // Check items in array for nested arrays
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      // Once array within array has been found, begin the array merging.
      flattened = flattened.concat(arr1[i]);
      
      // Non array elements pushed into the new array.
    } else {
      flattened.push(arr1[i]);
    }
  }
  return flattened;
};

flatten([1, 2, [3, 4], 5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);