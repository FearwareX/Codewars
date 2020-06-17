const add = (a, b) => {
  let array1;
  let array2;
  if (a.length >= b.length) {
    array1 = a.split('');
    array2 = b.split('');
  } else {
    array1 = b.split('');
    array2 = a.split('');
  }
  const result = [];
  let tmp = 0;
  while (array1.length) {
    array2.unshift('0');
    const s = tmp + Number(array1.pop()) + Number(array2.pop());
    tmp = s >= 10 ? 1 : 0;
    const char = tmp === 1 ? `${s}`.split('').pop() : s;
    result.unshift(char);
  }
  if (tmp) {
    result.unshift('1');
  }
  return result.join('');
};
console.log(add('101', '100'));
