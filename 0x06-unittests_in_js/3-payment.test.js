const { describe, it } = require('mocha');
const assert = require("assert");
const { spy, stub } = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  const mySpy = spy(Utils, "calculateNumber");

  it('Check the arguments called with Utils.calculateNumber', function () {
    sendPaymentRequestToApi(300, 35);
    assert.equal(mySpy.args, [['SUM', 300, 35]]);
  });
  it('Check if Utils.calculateNumber was called', function () {
    const myStub = stub(Utils, "calculateNumber");
    myStub.withArgs("SUM", 300, 35).returns(335);
    sendPaymentRequestToApi(300, 35);
    assert.equal(mySpy.called, true);
    assert.equal(335, mySpy("SUM", a, b));
  });
});
