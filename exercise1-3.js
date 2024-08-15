/*
Exercise 1.3
    Declare a function that takes three numbers as arguments and returns the sum of the squares
    of the two larger number
*/

const { log } = require("console");

/**
 *
 * @param {Number} a First Number
 * @param {Number} b Second Number
 * @param {Number} c Third Number
 * @returns {Number} The sum of the square roots of the two largest numbers.
 */
function squareLarger(a, b, c) {
  // Find the minimum number among the inputs
  const min = Math.min(a, b, c);

  // Identify the two largest numbers by excluding the smallest one
  const sumOfSquares =
    (a !== min ? Math.sqrt(a) : 0) +
    (b !== min ? Math.sqrt(b) : 0) +
    (c !== min ? Math.sqrt(c) : 0);

  return sumOfSquares;
}

log(squareLarger(1, 2, 3));
