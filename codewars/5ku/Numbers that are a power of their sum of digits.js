const powerSumDigTerm = (n) => {
  const array1 = [];
  for (let i = 2; i < 100; i += 1) {
    for (let j = 2; j < 10; j += 1) {
      const res = i ** j;
      if (
        `${res}`
          .split('')
          .map(Number)
          .reduce((x, y) => x + y) === i
      ) {
        array1.push(res);
      }
    }
  }
  array1.sort((a, b) => a - b);
  return array1[n - 1];
};
console.log(powerSumDigTerm(1));
