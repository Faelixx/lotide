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

const assertArraysEqual = function(arr1, arr2) {
  // Function output into a variable to create a comparison.
  let arrayCheck = eqArrays(arr1, arr2);
  if (arrayCheck === true) {
    console.log(`╰(*°▽°*)╯ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`(┬┬﹏┬┬) Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


/*
The function will return a "slice of the array with elements taken fron the beginning.
It should keep going until the callback/predicate returns a truthy value."
*/

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  } //return result;
};

// Test Cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1= takeUntil(data1, x => x < 0);
console.log(results1);

console.log("---");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2)

console.log("---");

const data3 = [1, 3, 7, 8, 2, 1, 123,];
const results3 = takeUntil(data3, x => x % 2 === 0);
console.log(results3);

console.log("---")

const data4 = ["The", "Humpty", "Dance", "Is", "Your", "Chance"];
const results4 = takeUntil(data4, x => x.length < 3);
console.log(results4);

// AssertArraysEqual test cases
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results4, ["The", "Humpty", "Dance"]);
assertArraysEqual(results4, ["The", "Humpty", "Chance"]);