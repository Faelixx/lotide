// Takes an array as its first argument
// The second argument takes a callback function 
// The callback function is applied to each element in the passed array

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

module.exports = map;