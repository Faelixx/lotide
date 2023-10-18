const assertArraysEqual = function(arr1, arr2) { 
  // Check if both arrays are the same length
  if (arr1.length !== arr2.length) {
    // Console message to show they are inequal
    console.log(`(┬┬﹏┬┬) Assertion Failed`);
    return;
  }
  // Compare each element in the arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        // Console message to show they are inequal
        console.log(`(┬┬﹏┬┬) Assertion Failed`);
        return;
    }
  }
  // Console message to show they are equal
  console.log(`╰(*°▽°*)╯ Assertion Passed!`);
};
// Test Cases
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 4]));
console.log(assertArraysEqual([2, 2, 3], [1, 2, 3]));