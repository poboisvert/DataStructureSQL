// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  return str.split('').every((word, index) => {
    return word === str[str.length - index - 1];
  });
}

module.exports = palindrome;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Each letter str.split('');
// Each word const words = str.split(' ');

// Solution 1
/* const rev = str.split('').reverse().join('');
return str === rev; */
