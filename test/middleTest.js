const assert = require('chai').assert
const middle = require('../middle');

// Test Cases

const twoValue = [1, 2];
const threeValue = [1, 2, 3];
const fourValue = [1, 2, 3, 4];
const tenValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle(threeValue), [2]);
  });
});

describe("#middle", () => {
  it("returns 2, 3 for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle(fourValue), [2, 3]);
  });
});

describe("#middle", () => {
  it("returns 5, 6 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle(tenValue), [5, 6]);
  });
});



