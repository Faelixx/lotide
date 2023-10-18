//Here we have declared our function as a variable expression.

const assertEqual = function(actual, expected) {

  /* Make the function compare the two values it takes in
  and print out a message telling us if they match or not.
  */
  if (actual === expected) {
    console.log("╰(*°▽°*)╯Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("(┬┬﹏┬┬)Assertion Failed: " + actual + " !== " + expected);
  }
};

//Here we have some code to test out our function.
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 10);
assertEqual("Hello, World!", "HELLO WORLD!");
assertEqual("Foo", "Foo");
