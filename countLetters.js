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
