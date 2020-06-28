const n2n = (n, k) => {
  const result = n ** n;
  return `${result}`.substring(`${result}`.length - k);
};

// function n2n(n, k) {
//   const p = 100000;
//   return ('000000000' + calc(n, n)).slice(-k);
//   function calc(n, m) {
//     if (m == 0) return 1;
//     var a = calc(n, m % 2 ? m - 1 : m / 2),
//       b = (a / p) | 0,
//       c = m % 2 ? n : a,
//       d = (c / p) | 0;
//     (a %= p), (c %= p);
//     return ((a * d + b * c) % p) * p + ((a * c) % (p * p));
//   }
// }

// const { execSync } = require('child_process');

// function n2n(n, k) {
//   return execSync(`python -c 'print(pow(${n}, ${n}, 10**${k}))'`, { encoding: 'ascii' }).trim().padStart(k, '0');
// }

console.log(n2n(5, 4));
