# 树 节点

## 二叉树先序遍历

``` javascript
// 递归
var preorderTraversal = function(root) {
    let ret = [];
    const order = function(root) {
        if (!root) return;
        ret.push(root.val);
        order(root.left);
        order(root.right);
    }
    order(root);
    return ret;
};
// 迭代
var preorderTraversal = function(root) {
    if (!root) return [];
    let ret = [];
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        ret.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return ret;
}
```

## 二叉树中序遍历

``` javascript
var inorderTraversal = function(root) {
    let ret = [];
    const order = function(root) {
        if (!root) return;
        order(root.left);
        ret.push(root.val);
        order(root.right);
    }
    order(root);
    return ret;
};
// 迭代
var inorderTraversal = function(root) {
    let ret = [];
    let stk = [], head = root;
    // 迭代
    while (head || stk.length) {
        while (head) {
            stk.push(head);
            head = head.left;
        }
        head = stk.pop();
        ret.push(head.val);
        head = head.right;
    }
    return ret;
};
```

## 二叉树后序遍历

``` javascript
// 递归
var postorderTraversal = function(root) {
    let ret = [];
    const order = function(root) {
        if (!root) return;
        order(root.left);
        order(root.right);
        ret.push(root.val);
    }
    order(root);
    return ret;
};
// 迭代
```

## N叉树前序遍历

``` javascript
// 递归
var preorder = function(root) {
    let ret = [];
    const order = function(root) {
        if (!root) return;
        ret.push(root.val);
        if (root.children) {
            for (let child of root.children) {
                order(child);
            }
        }
    }
    order(root);
    return ret;
};

// 迭代
var preorder = function(root) {
    if (!root) return [];
    let ret = [];
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        ret.push(node.val);
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
    return ret;
};
```

## N叉树层序遍历
``` javascript
// 递归

// 迭代 使用队列
var levelOrder = function(root) {
    if (!root) return [];
    let ret = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let level = [];
        let size = queue.length;
        while (size-- > 0) {
            let node = queue.shift();
            level.push(node.val);
            if (node.children) {
                queue.push(...node.children);
            }
        }
        ret.push(level);
    }
    return ret;
};
```



## N叉树后序遍历

``` javascript
// 递归
var postorder = function(root) {
    let ret = [];
    const order = function(root) {
        if (!root) return;
        if (root.children) {
            for (let child of root.children) {
                order(child);
            }
        }
        ret.push(root.val);
    }
    order(root);
    return ret;
};
// 迭代
```
