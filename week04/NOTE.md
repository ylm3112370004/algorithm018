# 第九课 深度优先搜索和广度优先搜索 （优先权优先搜索 启发式搜索）

如果 形成的树的高度是有限的，那么 深度优先 和 广度优先是差不多的， 首选深度优先

如果 形成的**树的高度未知**，而且总是求解**最短、最小**，那么首选考虑 广度优先


# 第10课 贪心算法



# 第11课 二分查找

一般都是将 O(N)的时间复杂度 提升为 O(logN)的时间复杂度 时 使用二分法

固定模板

```javascript
function(nums, target) {
    let l = 0, r = len(Array)-1;
    while (l <= r) {
        let mid = (l + r) >> 1; //相当于除二求整
        if (nums[mid] === target) {
            // todo...
            return;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }   
}

```