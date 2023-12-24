const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = '';
  const str = n.toString();

  for(let i = 0; i < str.toString().length; i += 1)
  {
    if (+str.replace(str[i], '') > max || max === '')
    {
      max = +str.replace(str[i], '');
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
