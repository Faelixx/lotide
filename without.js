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

/* A function that takes two arrays.
first an original and second, a list of items to remove from the original array.
*/
const without = function(source, itemsToRemove) {
  // Create a new array to return a new array for the function.
  let withoutResult = source.slice();
  // Loop through both of the arrays to find a match.
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < withoutResult.length; j++) {
      if (itemsToRemove[i] === withoutResult[j]) {
        withoutResult.splice(j, 1);
      }
    }
  } return withoutResult;
};

const words = ["Booty", "warrior", "Boondocks"];

without(words, ["Booty"]);
assertArraysEqual(words, ["Booty", "warrior", "Boondocks"]);

without([1, 2, 3], [1, 3]);
without([1, 2, 3], ["1", "2", 3]);
without([1, 2, 3], [2, "2", 3]);
without([1, 2, 3], [4, 1, "1"]);