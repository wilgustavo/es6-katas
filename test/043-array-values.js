const assert = require("assert");

// 43: array - `Array.prototype.values`
// To do: make all tests pass, leave the assert lines unchanged!

describe("`Array.prototype.values` no está definido en Nodejs", () => {
  it("values is not defined", function() {
    const arr = ["k", "e", "y"];

    assert.equal(arr.values, void 0);
  });
});
