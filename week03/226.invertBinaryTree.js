// 重复性问题

// let left = 翻转后的 root.left;
// let right = 翻转后的 root.right;
// root.left = right;
// root.right = left;


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

  if (!root) return null;

  // 重复性
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};