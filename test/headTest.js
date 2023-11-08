const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Cases

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1)
  });
});

describe("#head", () => {
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5)
  });
});

