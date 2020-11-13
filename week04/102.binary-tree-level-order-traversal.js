/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
  // 广度优先搜索 迭代
  // T O(N) S O(N)
var levelOrder = function(root) {
  if (!root) return [];

  let ret = [];
  let queue = [root];
  while (queue.length !== 0) {
      let size = queue.length;
      let tempLevel = [];
      while (size-- > 0) {
          let node = queue.shift();
          tempLevel.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      ret.push(tempLevel);
  }
  return ret;
};


// 深度优先遍历 递归
// 时间复杂度：O(N)
// 空间复杂度：O(h)，h 是树的高度
var levelOrder = function(root) {
  let ret = [];
  const dfs = function(level, root) {
      if (!root) return;
      if (ret[level]) {
          ret[level].push(root.val);
      } else {
          ret[level] = [root.val];
      }
      dfs(level+1, root.left);
      dfs(level+1, root.right);
  }
  dfs(0, root)
  return ret;
};