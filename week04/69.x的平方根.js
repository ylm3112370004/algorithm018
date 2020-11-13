/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 1) return x;
  let l = 0, r = x, ans = -1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid -1;
    }
  }
  return ans;
};


// x 的平方根 无限逼近
// 迭代还可以帮助我们进行无穷次地逼近，求得方程的精确或者近似解。