/*
i/p: 'ab'
o/p: '', 'a', 'b', 'ab'
*/

const fun = (str, i, subset) => {
  if (i < 0) {
    console.log(subset ? subset : "''")
    return;
  }

  fun(str, i - 1, str[i] + subset);
  fun(str, i - 1, subset);
};
let str = "abc";
fun("abc", str.length - 1, "");
