/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var inorderTraversal = function(root) {
  let ret = [];
  var inOrder = function(root) {
      if (!root) return;
      inOrder(root.left);
      ret.push(root.val);
      inOrder(root.right);
  }
  inOrder(root);
  return ret;
};

// 栈 迭代
var inorderTraversal = function() {
  const res = {};
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root.val);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
}