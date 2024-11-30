const { describe, it } = require('mocha');
const { expect } = require('chai');
const { spy } = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  const mySpy = spy(Utils, "calculateNumber");

  it('Check the arguments called with Utils.calculateNumber', function () {
    sendPaymentRequestToApi(300, 35);
    expect(mySpy.args).to.deep.equal([['SUM', 300, 35]]);
  });
  it('Check if Utils.calculateNumber was called', function () {
    sendPaymentRequestToApi(300, 35);
    expect(mySpy.called).to.be.true;
  });
  it('Check if Utils.calculateNumber was called Twice', function () {
    expect(mySpy.calledTwice).to.be.true;
  });
});
