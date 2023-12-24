const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (let i = 0; i < domains.length; i += 1) {
    const parts = domains[i].split('.');
    let reverse = '';

    for (let j = parts.length - 1; j >= 0; j -= 1) {
      reverse += `.${parts[j]}`;

      const value = result[reverse];

      if (!value) {
        result[reverse] = 1;
      }
      else {
        result[reverse] += 1;

      }
    }
  }

  return result;
}

getDNSStats(['epam.com'])

module.exports = {
  getDNSStats
};
