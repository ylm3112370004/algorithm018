/**
 * @param {number[]} heights
 * @return {number}
 */
// 1. 枚举 Time O(N^2)
var largestRectangleArea = function(heights) {
  if (heights.length === 0) return 0;
  let max = 0;
  for (let left = 0; left < heights.length; left++) {
      let minHeight = heights[left];
      max = Math.max(max, minHeight);
      for (let right = left+1; right < heights.length; right++) {
          minHeight= Math.min(minHeight, heights[right]);
          max = Math.max(max, (right - left + 1) * minHeight)
      }
  }
  return max;
};



