const assertEqual = function(actual, expected) {

  /* Make the function compare the two values it takes in
  and print out a message telling us if they match or not.
  */
  if (actual === expected) {
    //console.log("╰(*°▽°*)╯Assertion Passed: " + actual + " === " + expected);
    console.log(`╰(*°▽°*)╯ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    //console.log("(┬┬﹏┬┬)Assertion Failed: " + actual + " !== " + expected);
    console.log(`(┬┬﹏┬┬) Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  // Check if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Compare each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);