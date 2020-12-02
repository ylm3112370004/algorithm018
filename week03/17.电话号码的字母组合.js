// 深度优先
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let map = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz"
  }
  // 深度优先遍历 深度有限 而且属于全部数据都要
  let ret = [];
  const dfs = function(digits, path, level) {
    if (path.length === digits.length) {
      ret.push(path);
      return;
    }
    let str = map[digits[level]];
    for (let s of str) {
      dfs(digits, path+s, level+1)
    }
  }
  dfs(digits, "", 0);
  return ret;
};



// 广度优先
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let map = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz"
  }
  // 这里添加的 空字符串很重要
  let queue = [""];
  for (let i = 0; i < digits.length; i++) {
      let nums = map[digits[i]];
      let size = queue.length;
      while (size-- > 0) {
          let path = queue.shift();
          for (let k = 0; k < nums.length; k++) {
              queue.push(path + nums[k]);
          }
      }
  }
  return queue;
};

