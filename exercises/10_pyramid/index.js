// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // Find the middle of the table to start the pyramid
  const middleTable = Math.floor((2 * n - 1) / 2);

  // Pyramid builder
  // Row first to last loop vertical
  for (let row = 0; row < n; row++) {
    let stage = '';

    // Select middle of the table
    // column first to last loop vertical
    for (let column = 0; column < 2 * n - 1; column++) {
      if (middleTable - row <= column && middleTable + row >= column) {
        stage += '#';
      } else {
        stage += ' ';
      }
    }
    console.log(stage);
  }
}

module.exports = pyramid;
