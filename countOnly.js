// countOnly takes an object and an array as arguments.
// itemsToCount -> array, allItems -> object.
// returns how many times array items appear as object keys in object.

const countOnly = function(allItems, itemsToCount) {

  const results = {};

  for (const item of allItems) {
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
