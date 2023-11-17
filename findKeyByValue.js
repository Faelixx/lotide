// Finds key of an object if the key value pair is passed as the property.

const findKeyByValue = function(object, property) {
  const objArr = Object.keys(object);

  for (const properties of objArr) {
    if (object[properties] === property) {
      return properties;
    }
  }

};

module.exports = findKeyByValue;
