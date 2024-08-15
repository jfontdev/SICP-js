/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} Sum of "a" and "b"
 */
function plus(a, b) {
  return a + b;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} Substraction of "a" and "b"
 */
function minus(a, b) {
  return a - b;
}

/**
 *
 * @param {Number} a First Number
 * @param {Number} b Second Number
 * @returns {Number} The sum of "a" and the absolute value of "b".
 *  If "b" is positive or zero, the function returns the sum of "a" and "b".
 *  Else if "b" is negative, the function returns the sum of "a" and the absolute value of "b" by subtracting "b" from "a".
 * @example a_plus_abs_b(1,4) -> plus(1,4) -> 1 + 4 = 5
 * @example a_plus_abs_b(1,-4) -> minus(1,-4) -> 1 -(-4) -> 1 + 4 = 5
 */
function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

console.log(a_plus_abs_b(1, 4));
