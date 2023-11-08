/* Using the code below, we want to return the tail of an array by
creating a new array and not changing the inputted array.
*/
const tail = function(array) {
  return array.slice(array.length - 1);
};


module.exports = tail;