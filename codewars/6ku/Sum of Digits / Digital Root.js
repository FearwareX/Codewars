const digital_root = (n) => {
  const a = `${n}`
    .split('')
    .map(Number)
    .reduce((x, y) => x + y);
  return a >= 10 ? digital_root(a) : a;
};
console.log(digital_root(456));
