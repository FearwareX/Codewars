// const nextBigger = (n) => {
//   const array = n.toString().split('');
//   array.sort((a, b) => b - a);
//   return Number(array.join(''));
// };

// const nextBigger = (n) => {
//   const array = n.toString().split('');
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] < array[i + 1]) {
//       const tmp = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = tmp;
//     }
//   }
//   return Number(array.join(''));
// };

// console.log(nextBigger(414));

// const nextBigger = (n) => {
//   console.log(n);
//   const arr = `${n}`.split('').reverse();
//   let f = 0;
//   if (arr.length % 2 === 1) {
//     f = arr.pop();
//   }

//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] > arr[i + 1]) {
//       const temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   const result = +(f + arr.reverse().join(''));
//   return result === n ? -1 : result;
// };

const maxWithDigits = (n) =>
  parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
    10
  );
const nextBigger = (n) => {
  const mx = maxWithDigits(n);
  for (let i = n + 1; i <= mx; i += 1) if (maxWithDigits(i) === mx) return i;
  return -1;
};
console.log(nextBigger(2017), 2071);
