// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  // Generate the array with all numbers
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // Set parameters to navigation in the array
  let count = 1;

  // position to start
  let startColumn = 0;
  let startRow = 0;

  // Moveable end
  let endRow = n - 1;
  let endColumn = n - 1;

  // While to eiterate throught the array
  while (startColumn <= endColumn && startRow <= endRow) {
    // Fill top-first row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = count;
      // Increment count for the next row
      count++;
    }
    // Spiral setting
    startRow++;

    // Right last column - top right and go down we increase the end row we increase
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = count;
      // Increment count for the next row
      count++;
    }
    // Spiral setting
    endColumn--;

    // Bottom Row - top end column then we move left (go down) we decrease
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = count;
      // Increment count for the next row
      count++;
    }
    // Spiral setting
    endRow--;

    // startColumn - From bottom first row to the top first row we decrease
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = count;
      // Increment count for the next row
      count++;
    }
    // Spiral setting
    startColumn++;
  }

  return results;
}

module.exports = matrix;
