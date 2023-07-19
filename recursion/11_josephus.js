const fun = (n, k) => {
  if (n === 1) {
    return 0;
  }
  return (fun(n - 1, k) + k) % n;
};
console.log(fun(7, 3));
