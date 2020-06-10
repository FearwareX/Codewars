// 思路：计算5的个数

const zeros = (n) => {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
};
console.log(zeros(30));
