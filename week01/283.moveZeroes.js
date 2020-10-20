/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
const moveZeroes = function(nums) {
  let i = 0, j = 0, len = nums.length;
  for (; j< len; j++) {
    if (nums[j] != 0) {
      nums[i++] = nums[j];
    } 
  }
  while (i < len) {
    nums[i++] = 0;
  }
  console.log(nums)
}

time: O(N)
space: O(1)

const moveZeroes1 = function(nums) {
  let i = 0, j = 0, len = nums.length;
  for (; j< len; j++) {
    if (nums[j] != 0) {
      let tmp = nums[j];
      nums[j] = nums[i];
      nums[i++] = tmp;
    } 
  }
  console.log(nums)
}

// time: O(N)
// space: O(1)

// 如果0多的情况下 第二种情况好一些

const test1 = moveZeroes1([0,1,0,3,12]);

const test2 = moveZeroes1([1]);

const test3 = moveZeroes1([0]);

const test4 = moveZeroes1([0, 0, 1]);
