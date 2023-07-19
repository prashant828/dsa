/*
i/p: 'ab'
o/p: '', 'a', 'b', 'ab'
*/

const fun = (arr, sum, i) => {
  if (sum === 0) {
    return 1;
  }
  if (sum < 0) {
    return 0;
  }
  if (arr.length === i) {
    return 0;
  }
  return fun(arr, sum - arr[i], i + 1) + fun(arr, sum, i + 1);
};
let arr = [1, 2, 3];
console.log(fun(arr, 3, 0));
