const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([0]), 0);
assertEqual(head(["Booboo", "Dende"]), "Dende");