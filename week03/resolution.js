// 分解乘机

// [a, b, c, d, e]

var getPwd = function(pwd) {
  let nums = ['a', 'b', 'c', 'd', 'e']; // 总集合
  let path = [];
  
  const dfs = function(nums, pwd, path, s) {
    console.log(s);
    if (pwd === s) {
      console.log(s);
      return;
    }
    if (s.length >= pwd.length) return;

    for (let i = 0; i< nums.length; i++) {
      path.push(nums[i]);
      dfs(nums, pwd, path, s+nums[i]);
      path.pop();
    }
  }

  dfs(nums, pwd, path, "");
}

getPwd("acd");