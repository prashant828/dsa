/*
i/p: aba
o/p: true

i/p: abc
i/p: false
*/

const fun = (str, start, end) => {
  if (start >= end) return true;
  if (str[start] === str[end]) {
    return fun(str, start + 1, end - 1);
  }
  return false;
};
const str = "abba";

console.log(fun("abbc", 0, str.length - 1));
