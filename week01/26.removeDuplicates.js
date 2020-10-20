/**
 * 
 * @param {number[]} nums
 * @return {number} 
 */
const removeDuplicates = function(nums) {
  let i = 0, j = 1, len = nums.length;
  for (; j < len; j++) {
    if (nums[i] != nums[j]) {
      nums[++i] = nums[j];
    }
  }
  console.log(nums)
  return i+1;
}

// time: O(N)
// space: O(1)

// 有序 i, j

const test1 = removeDuplicates([1,1]);
console.log(test1)


const test2 = removeDuplicates([1,1, 3]);
console.log(test2)