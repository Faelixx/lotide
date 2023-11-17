// Store the letters of a string as keys in an object.
// Letter keys store how many times that letter appears in string.

const countLetters = function(string) {
  const results = {};

  for (let letter of string) {
    if (results[letter] >= 1 && letter !== " ") {
      results[letter] += 1;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  } return results;

};

module.exports = countLetters;
