/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let a = 0;
  let b = 0;
  const numberArr = n.toString().split('');
  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    sum += Number(numberArr[i]);
  }
  let result = sum;
  if (sum.toString().length > 1) {
    a = Math.trunc(sum / 10);
    b = sum % 10;
    result = a + b;
  }
  return result;
}
module.exports = getSumOfDigits;
