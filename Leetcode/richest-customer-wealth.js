const maximumWealth = (account) => {
  const result = [];
  for (let i = 0; i < account.length; i += 1) {
    result[i] = account[i].reduce((prev, curr) => prev + curr);
  }
  return Math.max(...result);
};
// 测试用例
console.log(
  maximumWealth([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
