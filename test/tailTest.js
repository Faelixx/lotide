const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Array check
let array = ["yo yo", "Lighthouse", "Labs"];
const test = tail(array);

assertEqual(test[1], "Labs");
assertEqual(test.length, 2);
assertEqual(tail(["empty"]).length, 0);
assertEqual(tail([]).length, 0);
assertEqual(array.length, 3);
