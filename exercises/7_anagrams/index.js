// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const mapA = buildMap(stringA);
  const mapB = buildMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  // This is an array
  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }
  return true;
}

function buildMap(str) {
  // Storage
  const mapClean = {};

  // Obj => const test = {}
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    mapClean[char] = mapClean[char] + 1 || 1;
  }

  return mapClean;
}

module.exports = anagrams;
