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
Create a function that takes a sentence string and maps each letter in the string
to an array of indices in the string.
*/

const letterPositions = function(sentence) {
  // Create an empty object to push results to.
  const results = {};
  // For in loop to create indices of the sentance
  for (const letter in sentence) {
    // Conditional to create an empty array property for each key being looped
    // Spaces do not need to have indices
    if ((results[sentence[letter]] === undefined) && (sentence[letter] !== " ")) {
      results[sentence[letter]] = [];
      // Properties must be integers
      results[sentence[letter]].push(parseInt(letter, 10));
      
      // Else..if becuase we do not want to overwrite any key properties with empty arrays.
    } else if (sentence[letter] !== " ") {
      results[sentence[letter]].push(parseInt(letter, 10));
    }
  }



  return results;
  //console.log(results);
};

// const test2 = {
//   h: [0],
//   e: [1],
//   l: [2,3],
//   o: [4]
// }

// Test Cases

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello")['e'], [1]);
// letterPositions("That a munch");