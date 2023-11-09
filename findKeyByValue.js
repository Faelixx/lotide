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
