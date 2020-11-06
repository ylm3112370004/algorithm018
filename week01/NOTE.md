

## 66 plusOne（加一）
1. 确定边界 [0, 9)

## 283 move zeroes（移动零）
1. 两种方式
2. 都从0开始

## 1 two sum（两数之和）


## 26 removeDuplicates（删除重复元素）
重点在于先移动，再赋值




## 15 3sum


## 21 merge sorted linked list
1. 迭代
- 链表中排序 交换位置 合并 最重要的思想**可以有自己的开头节点**
- time O(N)
2. 递归 之后补充 不太会

## 22 swapNodeInPairs 两两交换节点
1. 迭代 while loop
- 添加一个dummyHead帮助迭代
- 由于要返回链表 所有在操作的过程中 需要另外一个临时节点来代替dummyHead

2. 递归 recursion
递归的不太懂

## 206 reverseLinkedList
1. 迭代 while loop
- 链表与数组 数组的原地改变 是要在原数组上
- 链表本身就是在原地址，它的地址是不改变的，所改变的知识next的指向
- 注意边界条件 current != NULL
2. 递归 不太懂


## 141 linked list cycle
1. 使用 JavaScript 中的 Map 最好可以看一下底层实现
2. 快慢指针 龟兔原理 
**边界条件 [](空) [1](一个元素）[1,2](两个元素)**

## 142 linked list cycle II
1. 使用 JavaScript 中的 Map
2. a + (n -1) * b + n * c = 2 * (a + b)


# 栈
最近相关性

## 使用两个栈来解决特殊性问题

1. 只用栈来实现队列

2. 只用队列来实现栈

# Deque: Double-End Queue 双端队列

this.map[key].value = value;

# 数组和函数的思考
函数是压缩的数组，数组是扩展的函数

1. 数据结构 = 结构定义 + 结构操作
2. 数据结构， 就是定义一种性质，并且维护这种性质。

- 结构定义：说明这个结构长什么样子，具备什么性质
- 结构操作：确定这种数据结构支持哪些操作，结构操作的结果，


## 链表

对于链表的相关操作，无论是插入还是删除，只要是有可能改变原有链表头结点的操作，增加虚拟头结点都是一个很实用的处理技巧。

