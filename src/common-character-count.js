const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = {};

  for( let i = 0; i < s1.length; i += 1) {
    if(Object.keys(counter).includes(s1[i])) {
      continue;
    }

    const regex = new RegExp(s1[i], "g");
    const countS1 = [...s1.matchAll(regex)].length;
    const countS2 = [...s2.matchAll(regex)].length;

    counter[s1[i]] = countS2 > countS1 ? countS1 : countS2;
  }

  return Object.values(counter).reduce((prev, curr) => prev += curr, 0);
}

getCommonCharacterCount('aabcc', 'adcaa')

module.exports = {
  getCommonCharacterCount
};
