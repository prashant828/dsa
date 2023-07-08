/* input 3 
output 3x2x1 = 6*/

const fun = (n, k) => {
  if (n === 0 ) {
    return k;
  }
  return fun(n - 1, n * k);
};

console.log(fun(3, 1));
