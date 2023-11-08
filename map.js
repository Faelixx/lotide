// const eqArrays = function(arr1, arr2) {
//   // Check if both arrays are the same length
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // Compare each element in the arrays
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   // Function output into a variable to create a comparison.
//   let arrayCheck = eqArrays(arr1, arr2);
//   if (arrayCheck === true) {
//     console.log(`╰(*°▽°*)╯ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`(┬┬﹏┬┬) Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

// // Test Variable
// const words = ["ground", "control", "to", "major", "tom"];

// Map function that creates a new array after modifiying each element into a passed array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

module.exports = map;

// Test Cases
// const results1 = map(words, word => word[0]);
// const rhymeDict = map(words, word => `${word[0]}ound`)

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// console.log("/* */");
// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 'tt']);
// console.log("/* */");
// console.log(rhymeDict);

