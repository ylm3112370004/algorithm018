
/**
 * 括号生成
 * @param {number} n
 * @returns {strings []} 
 */
var generateParenthesis = function(n) {
  let ret = [];
  
  const dfs = function(n, left, right, s) {
    if (left < right) return;
    if (left > n) return;
    if (s.length === 2*n && left === right) {
      ret.push(s);
    }
    dfs(n, left+1, right, s+"(");
    dfs(n, left, right+1, s+")");
  }

  dfs(n, 0, 0, "");
  return ret;
}


// 测试用例
console.log(generateParenthesis(1));

console.log("============================================");
console.log(generateParenthesis(2));

console.log("============================================");
console.log(generateParenthesis(3));