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

// const eqObjects = function(object1, object2) {
// // Create two arrays for each respective object keys for future comparison.
//   const objArr1 = Object.keys(object1);
//   const objArr2 = Object.keys(object2);
//   let result = true;

//   // Check that both object key arrays have the same length.
//   if (objArr1.length === objArr2.length) {
//     // For of loop to ensure that the key arrays match in values.
//     for (const objArr1Key of objArr1) {
//       if (Object.prototype.hasOwnProperty.call(object2, objArr1Key)) {
//         if (Array.isArray(object1[objArr1Key]) && Array.isArray(object2[objArr1Key])) {
//           result = eqArrays(object1[objArr1Key], object2[objArr1Key]);
//           if (result === false) {
//             return result;
//           }
//         } else if (object1[objArr1Key] !== object2[objArr1Key]) {
//           result = false;
//         } 
//       }
//     } return result;
//   } else {
//     result = false;
//   } return result;


// };

const assertObjectsEqual  = function(actual, expected) {
  const inspect = require('util').inspect;
  let objectCheck = eqObjects(actual, expected);
  if (objectCheck) {
    console.log(`╰(*°▽°*)╯ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`(┬┬﹏┬┬) Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: 1, b: 2, c: 3,}, { a: 1, b: 2, c: 3,});