const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect;
const { describe, it } = require('mocha');


// Test cases for 1-calcus
describe('Test calculateNumber with type ADD', function () {
  it('4 + 2 should return 6', function () {
    expect(calculateNumber('ADD', 4, 2)).to.equal(6);
  });
  it('2.4 + 4.8 should return 7', function () {
    expect(calculateNumber('ADD', 2.4, 4.8)).to.equal(7);
  });
  it('-2.4 + 4.8 should return 3', function () {
    expect(calculateNumber('ADD', -2.4, 4.8)).to.equal(3);
  });
});
describe('Test calculateNumber with type SUBTRACT', function () {
  it('4 - 2 should return 2', function () {
    expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
  });
  it('4.8 - 2.4 should return 3', function () {
    expect(calculateNumber('SUBTRACT', 4.8, 2.4)).to.equal(3);
  });
  it('-2.4 - 4.8 should return -7', function () {
    expect(calculateNumber('SUBTRACT', -2.4, 4.8)).to.equal(-7);
  });
});
describe('Test calculateNumber with type DIVIDE', function () {
  it('4 / 2 should return 2', function () {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('4.8 - 2.4 should return 2.5', function () {
    expect(calculateNumber('DIVIDE', 4.8, 2.4)).to.equal(2.5);
  });
  it('-2.4 / 4.8 should return -0.48', function () {
    expect(calculateNumber('DIVIDE', -2.4, 4.8)).to.equal(-0.4);
  });
  it('2.4 / 0 should return Error', function () {
    expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
  });
});
describe('Test calculateNumber with invalid type', function () {
  it('Should return Error', function () {
    expect(calculateNumber('MULTIPLY', 2, 2)).to.equal('Error');
  });
});
