const assert = require('chai').assert;
const tail = require('../tail');

// Test Case: Array check
const array1 = ["yo yo", "Lighthouse", "Labs"];
const array2 = ["yo yo", "Lighthouse", "Labs", "Hey Hey Hey"];


describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["yo yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(array1), ["Lighthouse", "Labs"]);
  });

  it('returns Hey Hey Hey for ["yo yo", "Lighthouse", "Labs", "Hey Hey Hey"]', () => {
    assert.deepEqual(tail(array2), ["Lighthouse", "Labs", "Hey Hey Hey"]);
  });
});


