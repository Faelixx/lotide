const letterPositions = function(sentence) {

  const results = {};

  for (const letter in sentence) {
    if ((results[sentence[letter]] === undefined) && (sentence[letter] !== " ")) {
      results[sentence[letter]] = [];
      results[sentence[letter]].push(parseInt(letter, 10));
    } else if (sentence[letter] !== " ") {
      results[sentence[letter]].push(parseInt(letter, 10));
    }
  }



  return results;
};

module.exports = letterPositions;
