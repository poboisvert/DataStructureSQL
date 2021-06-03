// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //for (let i = 0; i < str; i++) {}
  return str.split('').reduce((rever, letter) => letter + rever, '');
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
module.exports = reverse;

// Solution 1
/* function reverse(str) {
    const arrayNew = str.split('');
    arrayNew.reverse();
    return arr.arrayNew('');
  } */

// Solution 2
/*   for (let letter of str) {
    reversed = letter + reversed;
  }
  return reversed; */
