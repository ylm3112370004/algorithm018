const rotate = function (nums, k) {
  let len = nums.length - 1;
  for (let j = len; j > len - k; j--) {
    let tmp = nums[j];
    let i = j;
    for (; i >= k; i = i - k) {
      nums[i] = nums[i - k];
    }
    nums[i] = tmp;
  }
  console.log(nums)
}

const test1 = rotate([1, 2, 3, 4, 5, 6, 7], 3)