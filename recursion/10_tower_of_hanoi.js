const fun = (n, src, aux, dest) => {
  if (n === 1) {
    console.log(`${src} to ${dest}`);
    return;
  }
  fun(n - 1, src, dest, aux);
  fun(1, src, aux, dest);
  fun(n - 1, aux, src, dest);
};

fun(3, "A", "B", "C");
