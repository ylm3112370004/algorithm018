/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 1. 递归
var preorder = function(root) {
  let ret = [];
  var _preorder = function(root) {
      if (root === null) return;
      ret.push(root.val);
      let children = root.children;
      if (children === null) return ;
      for (let i = 0; i < children.length; i++) {
          _preorder(children[i]);
      }
  }
  _preorder(root);
  return ret;
};


// 2. 迭代
var preorder = function(root) {
  if (root === null) return [];
  let ret = [], nodeStk = [];
  nodeStk.push(root);
  while (nodeStk.length !== 0) {
      let node = nodeStk.pop();
      ret.push(node.val);
      let children = node.children;
      if (children === null) continue;
      for (let i = children.length-1; i >= 0; i--) {
          nodeStk.push(children[i]);
      }
  }
  return ret;
};
