// 面币为 1，2，5，10 总共10 元 那么有多少种给法

var fixedSum = function(nums) {
  let ret = [];
  let path = [];
  const dfs = function(nums, sum, start, count, path) {
     if (sum === count) {
       ret.push([].concat(path));
       return;
     }
     if (sum < count) return;
     for (let i = start; i < nums.length; i++) {
       path.push(nums[i]);
       dfs(nums, sum, i, count+nums[i], path);
       path.pop();
     }
  }
  dfs(nums, 10, 0, 0, path);
  console.log(ret);
}

fixedSum([1,2,5,10]);