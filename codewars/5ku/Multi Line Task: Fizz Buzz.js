// const f = (n) => {
//   if (n % 15 === 0) {
//     return 'fizzbuzz';
//   }
//   if (n % 5 === 0) {
//     return 'buzz';
//   }
//   if (n % 3 === 0) {
//     return 'fizz';
//   }
//   return n;
// };

f=
n=>
(n%
3?
'':
'f\
iz\
z')
+(n
%5?
'':
'b\
uz\
z')
||n;

console.log(f(3));
