const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');


describe('getPaymentTokenFromAPI', function () {
  it('Check result of getPaymentTokenFromAPI', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        chai.expect(data).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});

describe('getPaymentTokenFromAPI2', function () {
  it('Check result properties', function (done) {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((data) => {
        // Verify that the response has the 'data' property
        chai.expect(data).to.have.property('data');
        // Invoke done to signal the end of the asynchronous test
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});