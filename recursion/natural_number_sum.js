/* 
i/p: 3
o/p: 3+2+1 = 6
*/

const fun = (n) => {
  if (n === 0) return 0;
  return n + fun(n - 1);
};

console.log(fun(3))
