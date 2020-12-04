/**
 * @param {number} x
 * @return {number}
 */
// 思路1: 将数字转换成字符串，再转换成数组， 反转数组后拼出结果返回。
const reverse = (x) => {
  const arr = `${x}`.split('');
  const max = 2 ** 31 - 1;
  const min = (-2) ** 31;
  let num = 0;
  if (arr[0] === '-') {
    arr.shift();
    arr.reverse();
    num = -arr.join('');
  } else {
    num = +arr.reverse().join('');
  }
  if (num > max || num < min) {
    return 0;
  }
  return num;
};
