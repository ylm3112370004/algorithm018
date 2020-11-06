/**
 * @param {number[]} heights
 * @return {number}
 */
// 1. 枚举 Time O(N^2) 宽
var largestRectangleArea = function(heights) {
  if (heights.length === 0) return 0;
  let max = 0;
  for (let left = 0; left < heights.length; left++) {
      let minHeight = heights[left];
      max = Math.max(max, minHeight);
      for (let right = left+1; right < heights.length-1; right++) {
          minHeight= Math.min(minHeight, heights[right]);
          max = Math.max(max, (right - left + 1) * minHeight)
      }
  }
  return max;
};

// 2 枚举 高
// 从高 向左右移动

var largestRectangleArea = function(heights) {
  if (heights.length === 0) return 0;
  let maxArea = 0;
  for (let mid = 0; mid < heights.length; mid++) {
    let height = heights[mid];
    let left = mid, right = mid;
    while (left - 1 >= 0 && heights[left-1] >= height) {
      left--;
    }
    while (right + 1 < heights.height - 1 && heights[right + 1] >= height) {
      right++;
    }
    maxArea = Math.max(height * (right - left + 1));
  }
  return maxArea;
}


