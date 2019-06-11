// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(sentence) {
  function capitalizeFirst(input) {
    return input.length > 0
      ? input[0].toUpperCase() + input.slice(1)
      : '';
  }
  
}

//
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirstLetters('i'), 'I');

assert.strictEqual(capitalizeFirstLetters(''), '');

