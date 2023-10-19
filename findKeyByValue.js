//Here we have declared our function as a variable expression.

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

/*
Write a function that takes in an object for the first argument and a
key property for the second argument. 
The purpose of this object is to return the key of the second argument
(key property) that is found within the first argument (object).
*/

const findKeyByValue = function (object, property) {
  /* Create a loop to check each key properties in the object argument
  for a match.
  */
  for (objects in object) {
    // Condition to check if property argument is a match to a loop iteration
    if (object[objects] === property) {
      // Resturn object key
      return objects;
    }
  }
};

// Test Cases

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);