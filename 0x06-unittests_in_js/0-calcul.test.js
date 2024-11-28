const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6); // 1 + 5 = 6
    assert.strictEqual(calculateNumber(1.6, 3.2), 5); // 2 + 3 = 5
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.6, -3.2), -5); // -2 + -3 = -5
    assert.strictEqual(calculateNumber(-1.4, 4.5), 3);   // -1 + 5 = 3
  });

  it('should handle zeros', () => {
    assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0
    assert.strictEqual(calculateNumber(0.4, 0.6), 1); // 0 + 1 = 1
  });

  it('should handle edge cases around rounding', () => {
    assert.strictEqual(calculateNumber(1.499999, 4.500001), 6); // 1 + 5 = 6
    assert.strictEqual(calculateNumber(-0.499999, -0.500001), -1); // 0 + -1 = -1
  });
});
