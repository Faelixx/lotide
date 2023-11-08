const assert = require('chai').assert;
const tail = require('../tail');

// Test Case: Array check
const array1 = ["yo yo", "Lighthouse", "Labs"];
const array2 = ["yo yo", "Lighthouse", "Labs", "Hey Hey Hey"];


describe("#tail", () => {
  it('returns Labs for ["yo yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(array1), ["Labs"]);
  });
});

describe("#tail", () => {
  it('returns Hey Hey Hey for ["yo yo", "Lighthouse", "Labs", "Hey Hey Hey"]', () => {
    assert.deepEqual(tail(array2), ["Hey Hey Hey"]);
  });
});


