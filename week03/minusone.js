
var minusOne = function(nums) {
  for (let i = nums.length-1; i>=1; i--) {
    if (nums[i] > 0) {
      nums[i]--;
      return nums;
    } else {
      nums[i] = 9;
    }
  }
  if (nums[0] === 1) {
    return new Array(nums.length-1).fill(9);
  } else {
    nums[0]--;
    return nums;
  }
}

console.log(minusOne([1000]));