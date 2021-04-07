/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let mid = end / 2;
  mid = Math.ceil(mid);

  while (end - start > 0) {
    if (array[mid] === value) {
      return mid;
    }

    if (value < array[mid]) {
      end = mid;
      mid = start + (end - start) / 2;
      mid = Math.floor(mid);
    } else {
      start = mid;
      mid = start + (end - start) / 2;
      mid = Math.ceil(mid);
    }
  }

  return -1;
}

module.exports = findIndex;
