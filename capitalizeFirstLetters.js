// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(sentence) {
  if (sentence === '') {
    return '';
  } else {

    let maj = sentence.split('')
    for (let i = 0; i < maj.length; i++) {
      if (maj[i] === " ") {
        maj[i + 1] = maj[i + 1].toUpperCase();
      }

    }
    maj[0] = maj[0].toUpperCase();
    let resultat = maj.join('');

    return resultat;
  };
}

// function capitalizeFirstLetters(sentence) {
//   return sentence.length > 0
//     ? sentence[0].toUpperCase() + sentence.slice(1)
//     : '';
// }

module.exports = capitalizeFirstLetters;