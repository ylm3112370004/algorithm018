// https://leetcode-cn.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    let m = matrix.length, n = matrix[0].length;
    let l = 0, r = m * n - 1;
    while (l <= r) {
      let mid = (l+r) >> 1;
      let midValue = matrix[Math.floor(mid / n)][mid % n];
      if (target === midValue) {
        return true;
      } else if (target > midValue) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return false;
};


// 审题 高效 整体 升序

// 思路 与一维数组匹配 
// l = 0, r = m * n - 1, mid = (l + r) >> 1
// m x n  m = arr.length n = arr[0].length
// arr[Math.floor(mid / n)][mid % n]

// 