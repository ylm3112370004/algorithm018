/**
 * @param {number} num
 * @return {number}
 */
// 递归
var addDigits = function(num) {
  if (num < 10) return num;
  let sum = 0;
  let str = num + "";
  for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
  }
  return addDigits(sum)
};

// 递归的时候 可以 求余 后 除10 来替代 for


// 迭代
var addDigits = function(num) {
  while (num >= 10) {
      let sum = 0;
      let str = num + "";
      for (let i = 0; i<str.length; i++) {
          sum += parseInt(str[i]);
      }
      num = sum;
  }
  return num;
};

// 数学上的
// xyz = x * 100 + y * 10 + z = 99 * x + 9 * y + ( x + y + z)
// 9 的倍数 需要考虑
var addDigits = function(num) {
  return (num - 1) % 9 + 1;
}