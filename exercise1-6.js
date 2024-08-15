/**
 * Returns one of two clauses based on the predicate.
 *
 * @param {boolean} predicate - The condition to evaluate.
 * @param {*} then_clause - The value to return if the predicate is true.
 * @param {*} else_clause - The value to return if the predicate is false.
 * @returns {*} - The result of the evaluation based on the predicate.
 */
function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

/**
 * Computes the square of a number.
 *
 * @param {number} x - The number to square.
 * @returns {number} - The square of the input number.
 */
function square(x) {
  return x * x;
}

/**
 * Computes the absolute value of a number.
 *
 * @param {number} x - The number to compute the absolute value for.
 * @returns {number} - The absolute value of the input number.
 */
function abs(x) {
  return x >= 0 ? x : -x;
}

/**
 * Determines if a guess is close enough to the square root of a number.
 *
 * @param {number} guess - The current guess for the square root.
 * @param {number} x - The number to find the square root of.
 * @returns {boolean} - True if the guess is within the tolerance, otherwise false.
 */
function is_good_enough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

/**
 * Improves the guess for the square root of a number using the average of the guess and the quotient of the number and the guess.
 *
 * @param {number} guess - The current guess for the square root.
 * @param {number} x - The number to find the square root of.
 * @returns {number} - A better guess for the square root.
 */
function improve(guess, x) {
  return average(guess, x / guess);
}

/**
 * Computes the average of two numbers.
 *
 * @param {number} x - The first number.
 * @param {number} y - The second number.
 * @returns {number} - The average of the two numbers.
 */
function average(x, y) {
  return (x + y) / 2;
}

/**
 * Recursively computes the square root of a number by iteratively improving the guess.
 *
 * @param {number} guess - The current guess for the square root.
 * @param {number} x - The number to find the square root of.
 * @returns {number} - The approximate square root of the number.
 */
function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

/**
 * This function will always result in a "stack overflow".
 * Because the "else_clause" of "conditional" is ALWAYS evaluated even "is_good_enough" is true.
 * This is due to Javascript eager evaluation of function arguments.
 * Leading to endless recursion of "sqrt_iter" which will eventually reach the maximum stack size or "stack overflow"
 */
function bad_sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x)
  );
}

/**
 * Computes the square root of a number using an iterative approximation method.
 *
 * This function initializes the approximation process with a starting guess of 1
 * and then uses the `sqrt_iter` function to iteratively improve the guess until
 * it is close enough to the actual square root.
 *
 * @param {number} x - The number to find the square root of.
 * @returns {number} - The approximate square root of the input number.
 */
function sqrt(x) {
  return sqrt_iter(1, x);
}

console.log(sqrt(2));
