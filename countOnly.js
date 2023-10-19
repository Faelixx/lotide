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
Create a function that takes an array of values and compares it to
an object that may or may not have the array items set to keys.
In the object key properties, lies a boolean value.
If, the key property is set to 'true' it counts how many times the
respective key is present in the input array and returns the count.

ex:

someArray = [a, b, c, a];
someObject = {a: true};

return = {a: 2};
*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifiying what to count

const countOnly = function(allItems, itemsToCount) {
  // A new object to store our results.
  const results = {};
  /* A for in loop for the itemsToCount object that will determine
  what to count in the allItems array.
  */

  for (const item of allItems) {
    // if statement to increment results if item is found in itemsToCount object
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
  // console.log(results);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
  
];

// const testResult = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
// Test Cases
//countOnly(testResult);
//countOnly(firstNames, testResult);
//console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);