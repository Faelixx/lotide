/*
Create a function that takes an array of values and compares it to
an object that may or may not have the array items set to keys.
In the object key properties, lies a boolean value.
If, the key property is set to 'true' it counts how many times the
respective key is present in the input array and returns the count.

ex:

someArray = [a, b, c, a];
someObject = {a: true};

return = {a: 2};
*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifiying what to count

const countOnly = function(allItems, itemsToCount) {
  // A new object to store our results.
  const results = {};
  /* A for in loop for the itemsToCount object that will determine
  what to count in the allItems array.
  */

  for (const item of allItems) {
    // if statement to increment results if item is found in itemsToCount object
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
