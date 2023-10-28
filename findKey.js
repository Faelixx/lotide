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
* findKey takes in an object and a callback.
* It should scan the object and return the FIRST ket for with the callback returns a truthy value
* If no key is found, returns undefined.
*/

const findKey = function(object, callback) {
  // Create an empty array to store our object keys.
  const objKeys = Object.keys(object);
  // Iterate over object keys in a for loop.
  for (const objKey of objKeys) {
    // Condition if object is inside an object key.
    if (typeof object[objKey] === "object") {
      // Condition test for the callback fuinction.
      if (callback(object[objKey])) {
        return objKey;
      }
      // Condition if no object is stored inside object argument keys.
    } else if (callback(object[objKey])) {
      return objKey;
    }
    

  } return undefined;

};

// Test Cases

const data1 = {
  "Blue Hill":  { stars: 1 },
  "Akaleri":    { stars: 3 },
  "noma":       { stars: 2 },
  "elBulli":    { stars: 3 },
  "Ora":        { stars: 2 },
  "Akelarre":   { stars: 3 }
};

const data2 = {
  "Zelda":  "Hyrule",
  "Tetra":  "Pirates",
  "Agitha": "Insects",
  "Midna":  "Twilight",
  "Ruto":   "Zora's Domain"
};


const result1 = findKey(data1, x => x.stars === 2);

console.log(result1);

console.log("---");

const result2 = findKey(data2, x => x === "Hyrule");
console.log(result2);

console.log("---");

const result3 = findKey(data2, x => x === "Gerudo Fortress");
console.log(result3);

console.log("---");

assertEqual(result1, "noma");
console.log("---");
assertEqual(result1, 2);
console.log("---");
assertEqual(result2, "Zelda");
console.log("---");
assertEqual(result1, "Ruto");
