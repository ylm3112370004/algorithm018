/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = {}, ret = [];
  for (let i = 0; i<nums1.length; i++) {
      if (nums1[i] in map) {
          map[nums1[i]]++;
      } else {
          map[nums1[i]] = 1;
      }
  }
  for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] in map && map[nums2[j]] > 0) {
          ret.push(nums2[j]);
          map[nums2[j]]--;
      }
  }
  return ret;
};

// 1. 如果给定的数组已经排好序呢？你将如何优化你的算法？
// i j
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let ret = [];
  let i = 0, j = 0, len1 = nums1.length, len2 = nums2.length;
  while (i < len1 && j < len2) {
      if (nums1[i] < nums2[j]) {
          i++;
      } else if (nums1[i] > nums2[j]) {
          j++;
      } else {
          ret.push(nums1[i]);
          i++;
          j++;
      }
  }
  return ret;
};

// 2. 如果 nums1 的大小比 nums2 小很多，哪种方法更优？

// 解题 较小数组 hash计数

// 3. 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

// 需要使用归并排序


