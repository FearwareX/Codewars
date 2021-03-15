/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
let foo = 5;
function addTwo(num) {
  num += 2;
}
function addTwo_v2(foo) {
  foo += 2;
}
addTwo(foo);
console.log(foo);
addTwo_v2(foo);
console.log(foo);
