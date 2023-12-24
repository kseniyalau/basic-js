const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const firstLetters = [];

  if(!members || typeof members !== 'object')
  {
    return false;
  }

  for(let i = 0; i < members.length; i += 1)
  {
    let memberName = members[i];

    if(!members[i])
    {
      continue;
    }

    if(typeof memberName === 'object'){
      if(memberName.length === 0 || typeof memberName[0] !== 'string')
      {
        continue;
      }

      if(memberName[0].trim().split(' ').length === 2) {
        continue;
      }

      memberName = memberName[0];
    }

    if(typeof memberName !== 'string')
    {
      continue;
    }

    const firstLetter = memberName.trim()[0];

    console.log(firstLetter)

    firstLetters.push(firstLetter.toUpperCase());

  }

  const sortedFirstLetters = firstLetters.sort();
  return sortedFirstLetters.join('');
}

module.exports = {
  createDreamTeam
};
