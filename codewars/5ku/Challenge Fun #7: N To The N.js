const n2n = (n, k) => {
  const result = n ** n;
  return `${result}`.substring(`${result}`.length - k);
};
console.log(n2n(5, 4));
