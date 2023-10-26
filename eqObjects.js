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

const eqObjects = function(object1, object2) {
// Create two arrays for each respective object keys for future comparison.
  const objArr1 = Object.keys(object1);
  const objArr2 = Object.keys(object2);
  let result = false;

  // Check that both object key arrays have the same length.
  if (objArr1.length === objArr2.length) {
    // For of loop to ensure that the key arrays match in values.
    for (const objArr1Key of objArr1) {
      // console.log(Array.isArray(object1[objArr1Key]), Array.isArray(object2[objArr1Key]), eqArrays(object1[objArr1Key], object2[objArr1Key])); // test log
      if (object2.hasOwnProperty.call(objArr1Key)) {
        if (Array.isArray(object1[objArr1Key]) && Array.isArray(object2[objArr1Key])) {
          result = eqArrays(object1[objArr1Key], object2[objArr1Key]);
          if (result = false) {
            return result;
          }
        } else if (object1[objArr1Key] === object2[objArr1Key]) {
          result = true;
        } 
      } 
      } return result;
  } return result;


};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
// console.log();
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
// console.log();

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
console.log();
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

