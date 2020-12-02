// 二分答案

// (0， 3000] 3% === 0.03
// (3000, 12000] 10% === 0.1
// (12000, 25000] 20% === 0.2
// (25000, 35000] 25% === 0.25
/**
 * 
 * @param {Number} salary 
 */
function getRealSalary(salary) {
  let tax = 0;
  if (salary <= 3000) {
    tax = salary * 0.03;
  } else if (salary <= 12000) {
    tax += 3000 * 0.03;
    tax += (salary - 3000) * 0.1;
  } else if (salary <= 25000) {
    tax += 3000 * 0.03;
    tax += 9000 * 0.1;
    tax += (salary - 12000) * 0.2;
  } else if (salary <= 35000) {
    tax += 3000 * 0.03;
    tax += 9000 * 0.1;
    tax += 25000 * 0.2;
    tax += (salary - 25000) * 0.25;
  }
  return salary - tax;
}

// let salary = getRealSalary(18600);
// console.log(salary);


function findSalary(target) {
  let l = 0, r = 0;
  if (target <= getRealSalary(3000)) {
    l = 0, r = 3000;
  } else if (target <= getRealSalary(12000)) {
    l = 3001, r = 12000;
  } else if (target <= getRealSalary(25000)) {
    l = 12001, r = 25000;
  } else if (target <= getRealSalary(35000)) {
    l = 25001, r = 35000;
  }
  while (l <= r) {
    let mid = (l + r) >> 1;
    let midV = getRealSalary(mid);
    if (target === midV) return mid;
    if (target > midV) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

let real = findSalary(16290);
console.log(real);