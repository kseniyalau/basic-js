const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];

  for(let i = 0; i < names.length; i += 1)
  {
    let name = names[i];

    if(!result.includes(name))
    {
      result.push(name);
    } else {
      for (let j = 0; j < 2; j += 1)
      {
        const name1 = `${name}(${j+1})`;

        if(!result.includes(name1))
        {
          result.push(name1);
          break;
        }
      }
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
