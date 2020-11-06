// 98.验证二叉搜索树
// https://leetcode-cn.com/problems/validate-binary-search-tree/

// 两个思路

// 在遇到二叉搜索树时，一定要注意 他的中序遍历 中序遍历是升序
// 关于排序的内容 大小相关的

// 迭代的中序遍历

var isValidBST = function(root) {
  let prev;
  let stack = [];
  while (root || stack.length) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      if (prev !== undefined && root.val <= prev) {
          return false;
      }
      prev = root.val;
      root = root.right;
  }
  return true;
};

// 使用递归的方式解决问题
// 重复的方法是什么？
var isValidBST = function(root) {

  const helper = function(root, lower, upper) {
      if (!root) return true;
      if (root.val > lower && root.val < upper) {
          return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
      } else {
          return false;
      }
  }

  return helper(root, -Infinity, Infinity);
};