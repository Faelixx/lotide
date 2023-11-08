//Here we have declared our function as a variable expression.

// const assertEqual = function(actual, expected) {

//   /* Make the function compare the two values it takes in
//   and print out a message telling us if they match or not.
//   */
//   if (actual === expected) {
//     //console.log("╰(*°▽°*)╯Assertion Passed: " + actual + " === " + expected);
//     console.log(`╰(*°▽°*)╯ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     //console.log("(┬┬﹏┬┬)Assertion Failed: " + actual + " !== " + expected);
//     console.log(`(┬┬﹏┬┬) Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

/*
Write a function that takes in an object for the first argument and a
key property for the second argument.
The purpose of this object is to return the key of the second argument
(key property) that is found within the first argument (object).
*/

const findKeyByValue = function(object, property) {
  // Create an empty array to store our object keys
  const objArr = Object.keys(object);

  // Create a loop for our object key array.
  for (const properties of objArr) {
    // Condidion to check if property argument is a match to a loop iteration
    // Note, the loop iteration from the array is used as a key for our object argument in the function
    if (object[properties] === property) {
      // Return array iteration
      return properties;
    }
  }

};

module.exports = findKeyByValue;

/*
Alternative version below
*/

// const findKeyByValue = function (object, property) {
//   /* Create a loop to check each key properties in the object argument
//   for a match.
//   */
//   for (const objects in object) {
//     // Condition to check if property argument is a match to a loop iteration
//     if (object[objects] === property) {
//       // Return object key
//       return objects;
//     }
//   }
// };

// Test Cases

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);