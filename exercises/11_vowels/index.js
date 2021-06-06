// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;

  // Validator
  const listVoyel_array = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (listVoyel_array.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;

// Solution 1
/* let count = 0;

// Validator
const listVoyel = 'aeiou';

for (let char of str.toLowerCase()) {
  if (listVoyeléincludes(char)) {
    count++;
  }
}

return count;
} */
// Solution 2
