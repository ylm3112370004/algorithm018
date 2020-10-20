/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const twoSums = function(nums, target) {
  let len = nums.length;
  let map = {};
  for (let i = 0; i < len; i++) {
    if (nums[i] in map) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
  }
  return [];
}

// time: O(N)
// space: O(N)

// 1. for for loop
// 2. map

const test1 = twoSums([2,7,11,15], 9);
console.log(test1);

const test2 = twoSums([3,2,4], 6);
console.log(test2);

const test3 = twoSums([3,3], 6);
console.log(test3);