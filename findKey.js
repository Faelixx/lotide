/*
* findKey takes in an object and a callback.
* It should scan the object and return the FIRST key for with the callback returns a truthy value
* If no key is found, returns undefined.
*/

const findKey = function(object, callback) {
  // Create an empty array to store our object keys.
  const objKeys = Object.keys(object);
  // Iterate over object keys in a for loop.
  for (const objKey of objKeys) {
    if (callback(object[objKey])) {
      return objKey;
    }
  } return undefined;

};

module.exports = findKey;

