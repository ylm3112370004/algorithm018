/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let ret = [], stack = [], start = -1;
  for (let i = 0; i < S.length; i++) {
    if (stack.length === 0) {
      stack.push(S[i]);
      start = i;
      continue;
    }
    if (S[i] === "(") {
      stack.push(S[i]);
      continue;
    } else if (S[i] === ")") {
      stack.pop();
    }
    if (stack.length === 0) {
      ret.push(S.substring(start + 1, i));
    }
  }
  return ret.join('');
};

// 以上使用栈 这都是比较特殊的情况下使用的技巧
// 使用count 做类似于栈的事情 比较简洁
var removeOuterParentheses = function (S) {
  let s = "";
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" && count++ > 0) s += S[i];
    if (S[i] === ")" && count-- > 1) s += S[i];
  }
  return s;
}