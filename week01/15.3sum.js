const threeSum = function(nums) {
	const results = []
  if (nums.length <= 3) return results;

  nums.sort((a,b) => a - b);
  let target = 0;
  for (let k=0; k<nums.length-2; k++) {
    if(nums[k] > 0) break;
    if(k>0 && nums[k] === nums[k-1]) continue;
    let i = 0, j = nums.length - 1;
    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum > target) {
        j--;
      } else if (sum < target) {
        i--;
      } else {
        results.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[j] === nums[j-1]) j--;
        while (i < j && nums[i] === nums[i+1]) i++;
        j--;
        i++;
      }
    }
  }
	return results
};

// 审题
// 1. 返回不重复的三元组
// 2. 会有负数， 无序
// 3. 可能不存在(返回[])
// 4. a+b = -c
// 5. 数组内有重复数字， 结果有可能有重复

// 思路
// 枚举：三重循环
// 两重循环+hash