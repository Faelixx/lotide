const flatten = function(arr1) {
  let flattened = [];
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      flattened = flattened.concat(arr1[i]);
    } else {
      flattened.push(arr1[i]);
    }
  }
  return flattened;
};

module.exports = flatten;
