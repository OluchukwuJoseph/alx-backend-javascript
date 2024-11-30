const { describe, it } = require('mocha');
const request = require('request');
const { expect } = require('chai');
const server = require('./api');


describe('Test index page', function () {
  it('Check status code', function (done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) {
        console.error('Error occurred:', error);
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Check Body', function (done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) {
        console.error('Error occurred:', error);
        done(error);
        return;
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after(function (done) {
    server.close(done);
  });
});
