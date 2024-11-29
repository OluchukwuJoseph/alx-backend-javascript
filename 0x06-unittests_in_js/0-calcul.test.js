const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');


// Test cases for 0-calcul
describe('test calculateNumber with positive and negative numbers', function () {
  it('2.2 + 2.2 should return 4', function () {
    assert.equal(calculateNumber(2.2, 2.2), 4);
  })
  it('2.8 + 2.6 should return 6', function () {
    assert.equal(calculateNumber(2.8, 2.6), 6);
  })
  it('2.1 + 2.6 should return 6', function () {
    assert.equal(calculateNumber(2.1, 2.6), 5);
  })
  it('-2.2 + -2.2 should return -4', function () {
    assert.equal(calculateNumber(-2.2, -2.2), -4);
  })
  it('-2.8 + -2.6 should return -6', function () {
    assert.equal(calculateNumber(-2.8, -2.6), -6);
  })
  it('-2.1 + -2.6 should return -6', function () {
    assert.equal(calculateNumber(-2.1, -2.6), -5);
  })
  it('2.2 + -2.2 should return 0', function () {
    assert.equal(calculateNumber(2.2, -2.2), 0);
  })
  it('2.8 + -2.6 should return 6', function () {
    assert.equal(calculateNumber(2.8, -2.6), 0);
  })
  it('-2.1 + 2.6 should return 1', function () {
    assert.equal(calculateNumber(-2.1, 2.6), 1);
  })
});
