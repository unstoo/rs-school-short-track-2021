/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * 132156
 */
function deleteDigit(n) {
  const digits = String(n)
    .split('')
    .map(Number);

  let prev = digits[0];
  let index = 0;
  let stopFlag = false;

  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i] < prev && stopFlag === false) {
      prev = digits[i];
      index = i;
    }

    if (digits[i] > prev && stopFlag === false) {
      stopFlag = true;
    }
  }

  digits.splice(index, 1);
  return Number(digits.join(''));
}

module.exports = deleteDigit;
