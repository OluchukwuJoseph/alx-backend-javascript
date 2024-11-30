// getPaymentTokenFromAPI function that takes one argument
// and returns a promise that resolves with a string "success" if success is true
// otherwise, function does nothing.
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({data: 'Successful response from the API' })
    }
  });
}

module.exports = getPaymentTokenFromAPI;