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
var preorderTraversal = function(root) {
  let ret = [];
  let preorder = function(root) {
      if (!root) return;
      ret.push(root.val);
      preorder(root.left);
      preorder(root.right);
  }
  preorder(root);
  return ret;
};

// stack 迭代
var preorderTraversal = function(root) {
  let ret = [];
  let stack = [];
  if (root) stack.push(root);
  while (stack.length !== 0) {
      root = stack.pop();
      ret.push(root.val);
      if (root.right) {
          stack.push(root.right);
      }
      if (root.left) {
          stack.push(root.left);
      }
  }
  return ret;
};