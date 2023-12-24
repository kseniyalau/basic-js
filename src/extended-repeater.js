const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let part = new String(str);
  let addition = new String(options.addition);

  if(options.addition !== undefined)
  {
    part += Array(options.additionRepeatTimes)
      .fill(addition)
      .join(options.additionSeparator ?? '|');
  }

  const result = Array(options.repeatTimes).fill(part);

  return result.join(options.separator ?? '+');
  
}

module.exports = {
  repeater
};
