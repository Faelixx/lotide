// takeUntil works like .splice().
// Returns a new array of elements with first elements of passed array
// Up until the first array element that meets the callback condition.

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
};

module.exports = takeUntil;