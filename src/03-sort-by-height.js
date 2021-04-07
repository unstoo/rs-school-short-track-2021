/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const dict = [];
  const filtered = arr.filter((x, i) => {
    if (x === -1) {
      dict.push(i);
      return false;
    }

    return true;
  });

  const sorted = filtered.sort((a, b) => a - b);

  dict.forEach((index) => {
    sorted.splice(index, 0, -1);
  });

  return sorted;
}

module.exports = sortByHeight;
