/*
i/p: 324
o/p: 3+2+4 = 9
*/

const fun = (n, k = 0) => {
  if (n === 0) return k;
  return fun(parseInt(n / 10), k + parseInt(n % 10));
};
const fun2 = (n) => {
  if (n < 10) return n;
  return fun(parseInt(n / 10)) + parseInt(n % 10);
};

const n = 3245;

console.log(fun(n));
console.log(fun2(n));

