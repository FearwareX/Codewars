// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
const createPhoneNumber = (n) => n.join('').replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
