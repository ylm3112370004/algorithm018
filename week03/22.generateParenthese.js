// 分析
// 泛型递归 深度优先遍历
/**
 * 括号生成  
 * @param {number} n
 * @returns {strings []} 
 */
// var generateParenthesis1 = function(n) {
//   let ret = [];
  
//   const dfs = function(n, left, right, s) {
//     if (left < right) return;
//     if (left > n) return;
//     if (s.length === 2*n && left === right) {
//       ret.push(s);
//     }
//     dfs(n, left+1, right, s+"(");
//     dfs(n, left, right+1, s+")");
//   }

//   dfs(n, 0, 0, "");
//   return ret;
// }


// 测试用例
// console.log(generateParenthesis(1));

// console.log("============================================");
// console.log(generateParenthesis(2));

// console.log("============================================");
// console.log(generateParenthesis(3));



// 广度优先遍历 与二叉树类似 有左右两个节点 "(" ")" 
var ListNode = function(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var generateParenthesis = function(n) {
  let ret = []
  let s = "";
  let root = new ListNode(s, n, n);
  let queue  = [root];
  while (queue.length !== 0) {
    let node = queue.shift();
    if (node.left > node.right) continue;
    if (node.left === 0 && node.right === 0) {
      ret.push(node.val)
    }
    if (node.left > 0) {
      queue.push(new ListNode(node.val+"(", node.left-1, node.right));
    }
    if (node.right > 0) {
      queue.push(new ListNode(node.val+")", node.left, node.right-1));
    }
  }
  return ret;
};

console.log("============================================");
console.log(generateParenthesis(1));

console.log("============================================");
console.log(generateParenthesis(2));

console.log("============================================");
console.log(generateParenthesis(3));