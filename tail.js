const assertEqual = function(actual, expected) {

  /* Make the function compare the two values it takes in
  and print out a message telling us if they match or not.
  */
  if (actual === expected) {
    
    console.log(`╰(*°▽°*)╯ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    
    console.log(`(┬┬﹏┬┬) Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Using the code below, we want to return the tail of an array by
creating a new array and not changing the inputted array.
*/
const tail = function(array) {
  return array.slice(1);
};

// Test Case: Array check
const test = tail(["yo yo", "Lighthouse", "Labs"]);

assertEqual(test[1], "Labs");
assertEqual(test.length, 2);