# 哈希表、映射、集合的实现与特性

## 哈希表

### 定义：Hash table
哈希表（hash table），也叫散列表，是根据关键码值（key value）而直接进行访问的数据结构。
他通过把关键码值映射到表中一个位置来访问记录，以加快查找速度。
这个映射函数叫作散列函数（Hash Function），存放记录的数组叫作哈希表（或散列表）。

1. 哈希碰撞（Hash Collisions）

### Java code 
1. Map: key-value对， key不重复
```java
- new HashMap()/new TreeMap()
- map.set(key, value)
- map.get(key)
- map.has(key)
- map.size()
- map.clear()
```

2. Set：不重复元素的集合
```java
- new HashSet()/new TreeSet()
- set.add(value)
- set.delete(value)
- set.hash(value)
```

### HashMap的个人总结

### leetCode

#### 242. 有效的字母异位
1. 审题
- 字母类别一样，数量一样 map  key 字母类别 value 数量
- 大小写敏感 只有小写字母 不考虑大小写

2. 思路
- 1. 暴力 排序 O(NlogN) 作比较 N 字符串长度
- 2. 数组保存 只能是 Ascall码 范围限制
- 3. map time O(N) space O(N) 


#### 49 字母异位词分组 
**这个题与two sums 做对比**
1. 需要排序  使用语言提供的排序 O(NlogN)
2. 特殊处理 使用字母的连续性 arr[26]

# 树

## 二叉树
1. 先序
2. 中序
3. 后序

## 二叉搜索树（Binary Search Tree）
### 概念
二叉搜索树，也称二叉排序树、有序二叉树（Ordered Binary Tree）、排序二叉树（Sorted Binary Tree）,
是指一个空树或具有以下性质的二叉树
1. 左子树上**所有节点**的值均小于它的根节点
2. 右子树上**所有节点**的值均大于它的根节点
3. 以此类推：左右子树也分别为二叉查找树。（**重复性！**）

**中序遍历**：升序排列 

### 常见操作 
1. 查询 O(logN)
2. 插入新节点
3. 删除

### 树的面试题解法一般都是递归，为什么？

#### 94. 二叉树的中序遍历
1. 递归 终止条件
2. 栈
