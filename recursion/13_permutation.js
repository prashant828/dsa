const fun = (str, fi = 0) => {
  if (fi === str.length - 1) {
    console.log(str);
    return;
  }
  for (let j = fi; j <= str.length - 1; j++) {
    let swaped = swap(str, fi, j);
    fun(swaped, fi + 1, j);
  }
};

const swap = (str, src, dest) => {
  let arr = str.split("");
  let temp = arr[src];
  arr[src] = arr[dest];
  arr[dest] = temp;
  return arr.join("");
};

const str = "abc";
fun(str);
