/**
 * @param {number[]} digits 区间 [0, 9)
 * @returns {number[]}
 */
const plusOne = function(digits) {
  let len = digits.length - 1;
  for (let i = len; i>=0; i--) {
    if(digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  let newDigits = new Array(len + 2).fill(0);
  newDigits[0] = 1;
  return newDigits;
}
const test1 = plusOne([9]);
console.log('test1: ', test1)
const test2 = plusOne([1,2,3,4]);
console.log('test2: ', test2)