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

module.exports = without;