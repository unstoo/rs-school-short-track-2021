/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }

  let prevChar = str[0];
  let count = 1;
  let encoded = str
    .split('')
    .reduce((string, char, i) => {
      if (i === 0) {
        return '';
      }

      if (char === prevChar) {
        count += 1;
        return string;
      }

      let temp = string;

      if (count === 1) {
        temp += prevChar;
        prevChar = char;
        return temp;
      }

      temp += count + prevChar;
      prevChar = char;
      count = 1;
      return temp;
    }, '');

  if (count > 1) {
    encoded += count;
  }

  encoded += prevChar;
  return encoded;
}

module.exports = encodeLine;
