// This script contains the calculateNumber function


/**
 * Rounds the numbers a and b and returns their sum
 * @param {number} a - The first number (int or float)
 * @param {number} b - The second number (int or float)
 * @returns {number} The sum of a and b
 */
function calculateNumber(a, b) {
  const aApprox = Math.round(a);
  const bApprox = Math.round(b);

  return aApprox + bApprox;
}

module.exports = calculateNumber;
