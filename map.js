// Map function that creates a new array after modifiying each element into a passed array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

module.exports = map;


