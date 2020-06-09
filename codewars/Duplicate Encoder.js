function duplicateEncode(word) {
  const result = {};
  const h = word.toLowerCase();
  for (let i = 0; i < h.length; i += 1) {
    if (result[h[i]]) {
      result[h[i]] += 1;
    } else {
      result[h[i]] = 1;
    }
  }
  let rr = '';
  for (let i = 0; i < h.length; i += 1) {
    if (result[h[i]] === 1) {
      rr += '(';
    } else {
      rr += ')';
    }
  }
  return rr;
}
// 输出
console.log(duplicateEncode('abbc'));
