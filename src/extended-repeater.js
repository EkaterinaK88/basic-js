module.exports = function repeater(str, options) {
  
  let string = String(str);
  let addition;
  if (options.addition === null) {
    addition = 'null';
  } else if (options.addition === undefined) {
    addition = '';
  } else {addition = String(options.addition)};
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  
  let res = '';
  let arr =[];
  let n = repeatTimes + repeatTimes * additionRepeatTimes;
  for (let i = 0; i < n; i+= additionRepeatTimes + 1) {
    arr[0] = string;
    if (repeatTimes > 1) {
      arr[i] = separator + string;
    } 
    if (additionRepeatTimes < 2) {
      arr[i + 1] = addition;
    } 
    for (let j = 2; j <= additionRepeatTimes; j++) {
      arr[i + 1] = addition;
      arr[i + j] = additionSeparator + addition;
    }
  }
  res = arr.join('');
  return res;
};
  
