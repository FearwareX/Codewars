/*
 * 数组取交集
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};

console.log(intersection([1, 2, 3], [2, 3, 4]));
