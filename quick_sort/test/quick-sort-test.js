const assert = require('chai').assert;
const quickSort = require('../lib/quick-sort');

describe("Quick Sort", () => {
  context("When supplied with an array of integers", () => {
    it("sorts the array", () => {
			var testNumbers = [1, 5, 3, 2, 6, 4];
      assert.deepEqual(quickSort(testNumbers), [1, 2, 3, 4, 5, 6]);
    });
  });
});
