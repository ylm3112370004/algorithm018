// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (nums[mid] === target) return mid;
    // 总有一边有序
    if (nums[l] <= nums[mid]) { // 左侧有序
      if (nums[l] <= target && target <= nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target < nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};


// 审题 升序

// 枚举 O(N) 
// 二分法 O(log(N)) 最简

// 关键 如何判断数组有序 sum[l] < sum[mid] 本身是升序数组

// 模板

// 测试

