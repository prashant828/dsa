/*
i/p: 2^3
o/p: 4
*/

const fun = (a, b) => {
  if (b <= 1) {
    return a;
  }
  return a * fun(a, b - 1);
};
console.log(fun(1, 1));
