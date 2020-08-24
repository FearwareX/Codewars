const multiply = (a, b) => {
  const res = [];
  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      const num = a[i] * b[j] + (res[i + j + 1] || 0);
      res[i + j + 1] = num % 10;
      res[i + j] = Math.floor(num / 10) + (res[i + j] || 0);
    }
  }
  return res.join('').replace(/^0+/, '') || '0';
};
