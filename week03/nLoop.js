// n 层循环

const dfs = function(n, k, path) {
  if (path.length === k) {
    console.log([].concat(path));
    return;
  }
  for (let i = 1; i <= n; i++) {
    path.push(i);
    dfs(n, k, path);
    path.pop();
  }
}
dfs(3, 3, []);