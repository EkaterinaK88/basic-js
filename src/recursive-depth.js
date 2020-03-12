module.exports = class DepthCalculator {
  calculateDepth(array) {
    let depth = 1;
    let arr = [];
      array = array.filter((i) => Array.isArray(i));
      if (array.length != 0) { 
        depth++;
        for (let i = 0; i < array.length; i++) {
          arr.push(...array[i]);
        };
        depth += calculateDepth(arr);
        depth--;
      };
     return depth;
  }
};
