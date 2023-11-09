/*
Create a function that returns the 'middle' element of an odd number array
And the two 'middle' elements of an even number array that's greater than 2
*/

const middle = function(arr1) {
  // Create a new array that copies the middle values from the input array.
  let midElement = [];
  // Condition if the array has no middle, return empty
  if (arr1.length < 3) {
    return midElement;
    // Condition if the array is an even number, return two middle numbers.
  } else if (arr1.length > 2 && arr1.length % 2 === 0) {
    midElement.push(arr1[(arr1.length / 2) - 1]);
    midElement.push(arr1[(arr1.length / 2)]);
    return midElement;
    // Condition if the array is an odd number, return one middle number.
  } else if (arr1.length > 2) {
    midElement.push(arr1[(Math.floor(arr1.length / 2))]);
    return midElement;
  }
    
};


module.exports = middle;