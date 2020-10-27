/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归
var postorder = function(root) {
  let ret = [];
  const traversal = function(root) {
      if (!root) return [];
      let children = root.children;
      for (let i = 0; i < children.length; i++) {
          traversal(children[i]);
      }
      return ret.push(root.val);
  }
  traversal(root);
  return ret;
};