const assert = require("assert");
const calculateNumber = require('./1-calcul');
const { describe, it } = require('mocha');


// Test cases for 1-calcus
describe('Test calculateNumber with type ADD', function () {
  it('4 + 2 should return 6', function () {
    assert.equal(calculateNumber('ADD', 4, 2), 6);
  });
  it('2.4 + 4.8 should return 7', function () {
    assert.equal(calculateNumber('ADD', 2.4, 4.8), 7);
  });
  it('-2.4 + 4.8 should return 3', function () {
    assert.equal(calculateNumber('ADD', -2.4, 4.8), 3);
  });
});
describe('Test calculateNumber with type SUBTRACT', function () {
  it('4 - 2 should return 2', function () {
    assert.equal(calculateNumber('SUBTRACT', 4, 2), 2);
  });
  it('4.8 - 2.4 should return 3', function () {
    assert.equal(calculateNumber('SUBTRACT', 4.8, 2.4), 3);
  });
  it('-2.4 - 4.8 should return -7', function () {
    assert.equal(calculateNumber('SUBTRACT', -2.4, 4.8), -7);
  });
});
describe('Test calculateNumber with type DIVIDE', function () {
  it('4 / 2 should return 2', function () {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('4.8 - 2.4 should return 2.5', function () {
    assert.equal(calculateNumber('DIVIDE', 4.8, 2.4), 2.5);
  });
  it('-2.4 / 4.8 should return -0.48', function () {
    assert.equal(calculateNumber('DIVIDE', -2.4, 4.8), -0.4);
  });
  it('2.4 / 0 should return Error', function () {
    assert.equal(calculateNumber('DIVIDE', 2.4, 0), 'Error');
  });
});