/*
 * 数组扁平化
 */

// 1. 递归
const flatten1 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten1(arr[i]));
    } else result = result.concat(arr[i]);
  }
  return result;
};

// console.log(flatten1([1, 2, 3, [1, 2]]));

// 2. 利用flat
const flatten2 = (arr) => arr.flat(Infinity);

// console.log(flatten2([1, 2, 3, [1, 2]]));

// 3. 利用正则表达式
const flatten3 = (arr) => JSON.parse(`[${JSON.stringify(arr).replace(/\[|\]/g, '')}]`);

// console.log(flatten3([1, 2, 3, [1, 2]]));

// 4. 使用reduce递归
const flatten4 = (arr) => arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten4(cur) : cur), []);

// console.log(flatten4([1, 2, 3, [1, 2]]));
