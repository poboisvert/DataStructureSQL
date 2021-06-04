// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const bulk = []; // Fix

  // Index
  let index = 0; // Can change

  while (index < array.length) {
    bulk.push(array.slice(index, index + size));
    index += size;
  }

  return bulk;
}

module.exports = chunk;

// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements

// Solution 1
// Storage
/*   const bulk = [];

  for (let element of array) {
    const last = bulk[bulk.length - 1];

    if (!last || last.length === size) {
      bulk.push([element]);
    } else {
      last.push(element);
    }
  }

  return bulk; */
