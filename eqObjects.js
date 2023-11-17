// Use eqArrays to compare object keys stored in an array.

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
    const objArr1 = Object.keys(object1);
    const objArr2 = Object.keys(object2);
    let result = true;
  
    if (objArr1.length === objArr2.length) {
      for (const objArr1Key of objArr1) {
        if (Object.prototype.hasOwnProperty.call(object2, objArr1Key)) {
          if (Array.isArray(object1[objArr1Key]) && Array.isArray(object2[objArr1Key])) {
            result = eqArrays(object1[objArr1Key], object2[objArr1Key]);
            if (result === false) {
              return result;
            }
          } else if (object1[objArr1Key] !== object2[objArr1Key]) {
            result = false;
          } 
        }
      } return result;
    } else {
      result = false;
    } return result;
  
  
  };

  module.exports = eqObjects;


