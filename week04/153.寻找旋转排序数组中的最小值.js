// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums[0] <= nums[nums.length-1]) return nums[0];
  let l = 0, r = nums.length;
  while (l <= r) {
    let mid = (l + r) >> 1;

    if (nums[mid] > nums[mid+1]) return nums[mid+1];
    if (nums[mid-1] > nums[mid]) return nums[mid];

    // 往无序的部分靠拢
    if (nums[l] <= nums[mid]) { // 有序
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};

// 审题 升序  最小的元素

// 思路 枚举 O(N) 二分 O(log(N))