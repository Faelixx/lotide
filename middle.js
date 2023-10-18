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

/*
Create a function that returns the 'middle' element of an odd number array
And the two 'middle' elements of an even number array that's greater than 2
*/

const middle = function(arr1) {
  // Create a new array that copies the middle values from the input array.
  let midElement = [];
  // Condition if the array has no middle, return empty
  if (arr1.length < 3) {
    midElement = [];
    return midElement;
    // Condition if the array is an even number, return two middle numbers.
  } else if (arr1.length > 2 && arr1.length % 2 === 0) {
    midElement.push(arr1[(arr1.length / 2) - 1]);
    midElement.push(arr1[(arr1.length / 2)]);
    return midElement;
    // Condition if the array is an odd number, return one middle number.
  } else if (arr1.length > 2) {
    midElement.push(arr1[(Math.floor(arr1.length / 2))]);
    return midElement;
  }
    
};

// Test Cases

const twoValue = [1, 2];
const threeValue = [1, 2, 3];
const fourValue = [1, 2, 3, 4];
const tenValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

middle(twoValue);
assertArraysEqual(middle(twoValue), []);
assertArraysEqual(middle(threeValue), [2]);
assertArraysEqual(middle(fourValue), [2, 3]);
assertArraysEqual(middle(tenValue), [5, 6]);