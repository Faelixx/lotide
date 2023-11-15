const findKeyByValue = function(object, property) {
  const objArr = Object.keys(object);

  for (const properties of objArr) {
    if (object[properties] === property) {
      return properties;
    }
  }

};

module.exports = findKeyByValue;
