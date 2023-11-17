// Finds the first key that matches the key passed as the callback parameter.

const findKey = function(object, callback) {
  const objKeys = Object.keys(object);
  for (const objKey of objKeys) {
    if (callback(object[objKey])) {
      return objKey;
    }
  } return undefined;

};

module.exports = findKey;

