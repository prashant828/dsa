const fun = (arr) => {
  let largest = arr[0];
  let second = -1;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el > largest) {
      largest = el;
    }
    if (el < largest && el >= second) {
      second = el;
    }
  }
  return second;
};

console.log(fun([3, 3, 3, 3]));
