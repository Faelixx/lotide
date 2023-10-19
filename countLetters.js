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
The returned value of countLetters should look like an object that shows how many
times each letter in the function argument shows up in the argument.

ex:

countLetters("abcad")

> {a: 2, b: 1, c: 1, d: 1};

*/
const countLetters = function(string) {
  // First create an empty object for us to store our results and return information.
  const results = {};

  // Now we need a way to loop over our argument.
  // If it's a string, it can be treated like an array.

  for (let letter of string) {
    //console.log(letter); // test
    // We use a condition to assign keys and properties to our empty object.
    // Spaces are not neccessary for the countLetters function, hence: && letter !== " "
    if (results[letter] >= 1 && letter !== " ") {
      results[letter] += 1;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  } return results;

};

// Test Cases
//countLetters("string");
// console.log(countLetters("string"));
const munch = countLetters("You thought I was feeling you?!");
// console.log(countLetters("ahahahahh"));
//console.log(countLetters("lighthouse in the house"));
assertEqual(munch["g"], 2);
assertEqual(munch["Y"], 1);
assertEqual(munch[" "], 1);
assertEqual(munch[" "], undefined);