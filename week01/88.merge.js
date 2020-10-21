const merge1 = function(nums1, m, nums2, n) {
  const _nums1 = [].concat(nums1.slice(0, m));
  let head1 = 0, head2 = 0, head = 0;
  for (; head1<m, head2<n;) {
    if (_nums1[head1] < nums2[head2]) {
      nums1[head++] = _nums1[head1++];
    } else {
      nums1[head++] = nums2[head2++];
    }
  }
  while (head1 < m) {
    nums1[head++] = _nums1[head1++];
  }
  while (head2 < n) {
    nums1[head++] = nums2[head2++]
  }
}

/**
 * 从后向前
 * @param {number[]} nums1 
 * @param {number} m 
 * @param {number[]} nums2 
 * @param {number} n
 * @returns {void} 
 */
const merge = function(nums1, m, nums2, n) {
  let tail1 = m - 1;
  let tail2 = n - 1;
  let tail = m + n - 1;
  for (; tail1 >= 0, tail2 >= 0;) {
    if (nums1[tail1] > nums2[tail2]) {
      nums1[tail--] = nums1[tail1--];
    } else {
      nums1[tail--] = nums2[tail2--];
    }
  }
  while (tail2 >= 0) {
    nums1[tail2] = nums2[tail2];
    tail2--;
  }
}

// time：O(N)
// space：O(1)
// 审题
// 1. 都是有序的 num1， num2 ---> num1
// num1 长度增大

// 思路：
// 1. 从后向前
// 2. 从前向后

// 反馈