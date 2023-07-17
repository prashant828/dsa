// input n = 5
// output 1 2 3 4 5
const fun = (n) => {
  if (n === 0) return;
  fun(n - 1);
  console.log(n);
};

fun(3);
