# 递归

## 泛型递归 分治 回溯
递归  本质上  循环  

计算机语言 汇编语言  函数或指令写在什么地方 反复跳转到那里去执行

### n层循环怎么写

```javascript
// n 层循环
const dfs = function(n, k, path) {
  if (path.length === k) {
    console.log([].concat(path));
    return;
  }
  for (let i = 1; i <= n; i++) {
    path.push(i);
    dfs(n, k, path);
    path.pop(); // 回溯
  }
}
dfs(3, 3, []);

// 排列与组合的情况是在n层循环的基础上 进行剪枝
```

### 递归模板
```javascript
const recursion = (level, params) =>{
  // recursion terminator
  if(level > MAX_LEVEL){
    process_result
    return 
  }
  // process current level
  process(level, params)
  //drill down
  recursion(level+1, params)
  //clean current level status if needed
}
```

### 思维要点
1. 不要人肉进行递归（**最大误区**）
2. 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题）
3. 数学归纳法思维

## 树的递归 

1. 前序、中序、后序递归以及演变
2. 使用数组返回生成树 难点