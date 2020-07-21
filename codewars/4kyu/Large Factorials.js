const factorial = (n) => {
  const result = [1]; // 存储结果
  let digit = 1; // 位数，从第1位开始
  let count; // 每次计算的结果
  let num; // 阶乘的计算到的第几个
  let i; // result中每一项
  let carry; // 每次得数的进位
  for (num = 2; num <= n; num += 1) {
    for (i = 1, carry = 0; i <= digit; i += 1) {
      count = result[i - 1] * num + carry; // 每一项计算结果
      result[i - 1] = count % 10; // 将一个数的每一位数利用数组进行储存
      carry = (count - result[i - 1]) / 10; // 记录进位
    }
    while (carry) {
      // 如果还有进位，继续存储
      result[digit] = carry % 10;
      carry = (carry - result[digit]) / 10;
      digit += 1;
    }
  }
  return result.reverse().join('');
};
console.log(factorial(100));
