/*
 fibo -> 0 1 1 2 3 5 8

i/p: n = 3
o/p: 2

i/p: n = 0
o/p: 0
*/

const fun = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fun(n - 1) + fun(n - 2);
};

console.log(fun(4));
