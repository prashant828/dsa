// input n = 5
// output 5 4 3 2 1
const fun = (n) => {
  if (n === 0) return;
  console.log(n);
  fun(n - 1);
};

fun(3);
//test
