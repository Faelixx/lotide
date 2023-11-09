const eqObjects = require('./eqObjects');

const assertObjectsEqual  = function(actual, expected) {
  const inspect = require('util').inspect;
  let objectCheck = eqObjects(actual, expected);
  if (objectCheck) {
    console.log(`╰(*°▽°*)╯ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`(┬┬﹏┬┬) Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
