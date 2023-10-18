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
//Head function always returns the first item of the array but not as array itself.
const head = function(array) {
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([0]), 0);
assertEqual(head(["Booboo", "Dende"]), "Dende");