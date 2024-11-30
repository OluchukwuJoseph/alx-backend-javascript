const { describe, it } = require('mocha');
const { expect } = require('chai');
const { spy } = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  const mySpy = spy(Utils, "calculateNumber");

  it('Check the arguments called with Utils.calculateNumber', function () {
    const firstTotal = sendPaymentRequestToApi(300, 35);
    expect(mySpy.args).to.equal([['SUM', 300, 35]]);
  });
  it('Check if Utils.calculateNumber was called', function () {
    const total = sendPaymentRequestToApi(300, 35);
    expect(mySpy.called).to.be.true;
    expect(total).to.be.equal(mySpy(300, 35));
  });
  it('Check if Utils.calculateNumber was called Once', function () {
    const total = sendPaymentRequestToApi(300, 35);
    expect(mySpy.calledTwice).to.be.true;
    expect(total).to.be.equal(mySpy(300, 35));
  });
  it('Check if Utils.calculateNumber was called Twicce', function () {
    const total = sendPaymentRequestToApi(300, 35);
    expect(mySpy.calledThrice).to.be.true;
    expect(total).to.be.equal(mySpy(300, 35));
  });
});
