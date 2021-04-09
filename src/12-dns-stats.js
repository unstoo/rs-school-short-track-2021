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
  const dns = {};

  domains
    .map((domain) => domain.split('.').reverse())
    .forEach((reversedDomain) => {
      reversedDomain.reduce((acc, level) => {
        const key = `${acc}.${level}`;
        if (dns[key]) {
          dns[key] += 1;
        }

        if (dns[key] === undefined) {
          dns[key] = 1;
        }

        return key;
      }, '');
    });

  return dns;
}

module.exports = getDNSStats;
