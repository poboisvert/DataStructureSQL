// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Storage
  const dictionnary = {};
  // Store highest score
  let max = 0;
  let maxScore = '';
  // For of
  for (let char of str) {
    if (dictionnary[char]) {
      dictionnary[char]++;
    } else {
      dictionnary[char] = 1;
    }
  }

  // Will create a collection of key, value pair => dictionnary[char] = 1;

  //console.log(dictionnary);
  // For in is for object - if "in" the we use object
  for (let char in dictionnary) {
    if (dictionnary[char] > max) {
      max = dictionnary[char];
      maxScore = char;
    }
  }

  // Score return
  return maxScore;
}

module.exports = maxChar;
