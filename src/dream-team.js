module.exports = function createDreamTeam(members) {
  let res = [];
  if (!Array.isArray(members)) {
    res = false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        for (let j = 0; j < members[i].length; j++) {
          if (members[i][j] !== ' ') {
            res.push(members[i].slice(j,j + 1).toUpperCase());
            break;
          }
        }
      } 
    }

    res = res.sort().join('');
  
    if (res == []) {
      res = false;
    }
  }
  
  return res;
};
