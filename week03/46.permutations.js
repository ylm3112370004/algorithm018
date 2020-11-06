var permute = function(nums) {
  let len = nums.len;
  let ret = [];
  let path = [];
  let used = [];
  const dfs = (nums, len, depth, path, used, ret) =>{
      // recursion terminator
      if(depth === len){
          ret.push(path);
          return; 
      }
      // process current level
      for (let i = 0; i < len; i++) {
        if (used[i]) {
          continue;
        }
        used[i] = true;
        path.push(nums[i]);
        dfs(nums, len, depth+1, path, used. ret);
        used[i] = false;
        path.pop(nums[i]);
      }  
  }
  dfs(nums, len, 0, path, used, ret);
};