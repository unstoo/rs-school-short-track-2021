/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function countAround(m, row, col) {
  let minesCount = 0;
  const rows = m.length - 1;
  const cols = m[0].length - 1;
  // mine
  if (m[row][col] === true) {
    return 1;
  }

  // west
  if (col > 0) {
    if (m[row][col - 1]) {
      minesCount += 1;
    }
  }
  // east
  if (col < cols) {
    if (m[row][col + 1]) {
      minesCount += 1;
    }
  }
  // north
  if (row > 0) {
    if (m[row - 1][col]) {
      minesCount += 1;
    }
  }
  // south
  if (row < rows) {
    if (m[row + 1][col]) {
      minesCount += 1;
    }
  }
  // north-west
  if (col > 0 && row > 0) {
    if (m[row - 1][col - 1]) {
      minesCount += 1;
    }
  }
  // south-west
  if (col > 0 && row < rows) {
    if (m[row + 1][col - 1]) {
      minesCount += 1;
    }
  }
  // south-east
  if (col < cols && row < rows) {
    if (m[row + 1][col + 1]) {
      minesCount += 1;
    }
  }
  // north-east
  if (col < cols && row > 0) {
    if (m[row - 1][col + 1]) {
      minesCount += 1;
    }
  }

  return minesCount;
}

function minesweeper(m) {
  const rows = m.length;
  const cols = m[0].length;
  const result = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    result.push([]);
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const mines = countAround(m, rowIndex, colIndex);
      result[rowIndex].push(mines);
    }
  }
  return result;
}

module.exports = minesweeper;
