const middle = function(arr1) {
  let midElement = [];
  if (arr1.length < 3) {
    return midElement;
  } else if (arr1.length > 2 && arr1.length % 2 === 0) {
    midElement.push(arr1[(arr1.length / 2) - 1]);
    midElement.push(arr1[(arr1.length / 2)]);
    return midElement;
  } else if (arr1.length > 2) {
    midElement.push(arr1[(Math.floor(arr1.length / 2))]);
    return midElement;
  }
    
};


module.exports = middle;