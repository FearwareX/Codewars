// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/solutions/javascript
const solution = (str) => {
  let array = [];
  if (!str.length % 2 === 0 && str.length !== 0) {
    str += '_';
  }
  array = str.match(/../g);
  if (str.length === 0) return [];
  return array;
};
console.log(solution('a,b,c'));
