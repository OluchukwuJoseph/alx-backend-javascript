const { describe, it } = require('mocha');
const { expect } = require('chai');
const { spy, stub } = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  let mySpy;
  let myStub;

  beforeEach(function () {
    // Stub the Utils.calculateNumber function to always return 10
    mySpy = spy(console, "log");
    // Add spy to console.log
    myStub = stub(Utils, "calculateNumber");
    myStub.withArgs('SUM', 100, 20).returns(10);
  });

  afterEach(function () {
    // Restore the stub and spy
    mySpy.restore();
    myStub.restore();
  })

  it('Verify console.log message in sendPaymentRequestToApi', function () {
    sendPaymentRequestToApi(100, 20);
    expect(mySpy.calledWith('The total is: 10')).to.be.true;
  });
});
