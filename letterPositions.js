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

module.exports = letterPositions;
