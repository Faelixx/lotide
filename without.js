// .without() passes two arrays as arguments.
// First array -> 'source' is the array to be changed.
// Second array -> 'itemsToRemove' is the list of elements to be removed from the first array 

const without = function(source, itemsToRemove) {
  let withoutResult = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < withoutResult.length; j++) {
      if (itemsToRemove[i] === withoutResult[j]) {
        withoutResult.splice(j, 1);
      }
    }
  } return withoutResult;
};

module.exports = without;