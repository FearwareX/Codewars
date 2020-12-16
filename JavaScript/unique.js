/* 数组去重 */

// 1. 不考虑对象去重
const unique = (arr) => [...new Set(arr)];

// 2. 全部去重
const unique = (arr) => {
  const result = new Set();
  return arr.filter((item) => {
    // 创建一个可以唯一标识对象的字符串id
    const id = item + JSON.stringify(item);
    if (result.has(id)) {
      return false;
    }
    result.add(id);
    return true;
  });
};
