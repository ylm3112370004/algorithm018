class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
// 二叉搜索树
class BST {
  constructor() {
    this.root = null;
  }
  // 建立二叉搜索树
  insert(data) {
    let n = new Node(data, null, null);
    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent = null;
      while (true) {
        parent = current;
        if (data < parent.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
  inOrder() {
    let root = this.root;
    let ret = [];
    const helper = function(root) {
      if (!root) return;
      helper(root.left);
      ret.push(root.data);
      helper(root.right);
    }
    helper(root);
    return ret;
  }
  preOrder() {

  }
  postOrder() {

  }
  levelOrder() {
    let root = this.root;
    if (!root) return [];
    let ret = [];
    let queue = [root];
    while (queue.length) {
      let size = queue.length;
      let temp = [];
      while (size-- > 0) {
        let node =queue.shift();
        temp.push(node.data);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      ret.push(temp);
    }
    return ret;
  }
  find(data) {
    let root = this.root;
    let current = this.root;
    while (current) {
      if (current.data === data) {
        return current;
      } else if (current.data > data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return null;
  }
}


let bst = new BST();
bst.insert('mathematics');
bst.insert('physics');
bst.insert('geography');
bst.insert('zoology');
bst.insert('meteorology');
bst.insert('geology');
bst.insert('psychology');
bst.insert('chemistry');

console.log(bst.levelOrder());
console.log(bst.inOrder());