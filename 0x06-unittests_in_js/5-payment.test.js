const { describe, it } = require('mocha');
const { expect } = require('chai');
const { spy, stub } = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  let mySpy;
  let myStub;

  beforeEach(function () {
    // Add spy to console.log
    mySpy = spy(console, "log");
  });

  afterEach(function () {
    // Restore the stub and spy
    mySpy.restore();
  })

  it('Verify console.log message in sendPaymentRequestToApi', function () {
    sendPaymentRequestToApi(100, 20);
    expect(mySpy.calledWith('The total is: 120')).to.be.true;
  });
  it('Verify console.log message in sendPaymentRequestToApi', function () {
    sendPaymentRequestToApi(10, 10);
    expect(mySpy.calledWith('The total is: 20')).to.be.true;
  });
});
