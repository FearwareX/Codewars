/*
 * 数组扁平化
 */

const flatten = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else result = result.concat(arr[i]);
  }
  return result;
};

console.log(flatten([1, 2, 3, [1, 2]]));
