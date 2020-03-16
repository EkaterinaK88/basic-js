module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error("invalid data")}
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--double-next':
        if (String(arr[i + 1]) !== 'undefined') {
        arr.splice(i, 1, arr[i + 1]);
        i--;
        } else {
          arr.splice(i, 1);
        }
        break;
      case '--double-prev':
        if (String(arr[i - 1]) !== 'undefined') {
        arr.splice(i, 1, arr[i - 1]);
        
        } else {
          arr.splice(i, 1);
          i--;
        }
        break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-prev':
        if (String(arr[i - 1]) !== 'undefined') {
        arr.splice(i - 1, 2);
        i -= 2;
        } else {
          arr.splice(i, 1);
          i--;
        }
        break;
      case '--discard-next':
        arr.splice(i, 2);
        i -=2;
      break;
    } 
  }
  return arr;
};

