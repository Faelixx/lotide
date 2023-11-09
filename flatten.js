/* Create a function that takes an array with nested arrays
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

module.exports = flatten;
