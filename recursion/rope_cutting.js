/* 
i/p: n=5, a = 3, b =5, c =2
o/p: 2
*/

const fun = (n, a, b, c) => {
  if (n === 0) return 0;
  if (n <= -1) return -1;
  const res = Math.max(
    fun(n - a, a, b, c),
    fun(n - b, a, b, c),
    fun(n - c, a, b, c)
  );
  if (res === -1) return -1;
  return res + 1;
};

console.log(fun(5, 3, 5, 2));
