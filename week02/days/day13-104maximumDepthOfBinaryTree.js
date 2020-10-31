// 求解二叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

// 1. 递归求解
// - 解题关键 l 左子树深度； r 右子树深度  Max(l,r) + 1

var maxDepth = function(root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// 2 迭代 DFS 深度优先遍历
// - 解题关键 两个栈  1结点 2结点对应的深度
var maxDepth = function(root) {
  if (root === null) return 0;
  let nodeStk = [];  // js中数组可以用作栈  配合 push pop
  let valueStk = [];
  nodeStk.push(root);
  valueStk.push(1);
  let max = 0;
  while (nodeStk.length !== 0) {
    let node = nodeStk.pop();
    let value = valueStk.pop();
    max = Math.max(max, value);
    if (node.left) {
      nodeStk.push(node.left);
      valueStk.push(value + 1);
    }
    if (node.right) {
      nodeStk.push(node.right);
      valueStk.push(value + 1);
    }
  }
  return max;
}

// 3. 迭代 BFS 广度优先遍历
// - 解题关键 队列 同一层在一个循环里面
var maxDepth = function(root) {
  if (root === null) return 0;
  let queue = [];
  let count = 0;
  queue.push(root);
  while (queue.length !== 0) {
      let length = queue.length;
      while (length-- > 0) { // 同一层在一个循环里面
          let node = queue.shift();
          if (node.left !== null) {
              queue.push(node.left);
          }
          if (node.right !== null) {
              queue.push(node.right);
          }
      }
      count++;
  }
  return count;
};