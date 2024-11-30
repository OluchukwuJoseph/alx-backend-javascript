// This script contains the calculateNumber function


/**
 * Rounds the numbers a and b and returns their sum
 * @param {string} type - Determine the type of arithmetic operation to perform
 * @param {number} a - The first number (int or float)
 * @param {number} b - The second number (int or float)
 * @returns {number} The sum of a and b
 */
function calculateNumber(type, a, b) {
  const aApprox = Math.round(a);
  const bApprox = Math.round(b);

  if (type === 'SUM') {
    return aApprox + bApprox;
  } else if (type === 'SUBTRACT') {
    return aApprox - bApprox;
  } else if (type === 'DIVIDE') {
    if (bApprox === 0) {
      return 'Error';
    }
    return aApprox / bApprox;
  } else {
    return 'Error';
  }
}

module.exports = calculateNumber;
