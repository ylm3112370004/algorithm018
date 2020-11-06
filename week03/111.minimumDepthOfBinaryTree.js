/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  if (root.left === null && root.right === null) return 1;
  let min = Infinity;
  if (root.left !== null) {
      min = Math.min(minDepth(root.left), min);
  }
  if (root.right !== null) {
      min = Math.min(minDepth(root.right), min);
  }
  return min + 1;
};