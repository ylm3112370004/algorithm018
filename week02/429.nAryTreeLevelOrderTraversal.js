/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */

// 层序遍历  queue  两个while循环 
var levelOrder = function(root) {
  if (root === null) return [];
  let ret = []; // 二维
  let queue = []; // 与  push shift 配合
  queue.push(root);

  while (queue.length !== 0) {
      let length = queue.length;
      let arr = [];
      while (length-- > 0) {
          let node = queue.shift();
          arr.push(node.val);
          if (node.children !== null) {
              // for (let i = 0 ; i < node.children.length; i++) {
              //     queue.push(node.children[i]);
              // }
              queue.push(...node.children);
          }
      }
      ret.push(arr);
  }
  return ret;
};

// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/