function isOrthogonal(u, v) {
  // 解法一
  // let sum=0;
  // for(i = 0;i<u.length;i++){
  //   sum += u[i]*v[i];
  // }
  // return sum===0
  return u.reduce((sum, _, index) => sum + u[index] * v[index], 0) === 0;
}
console.log(isOrthogonal([1, -2], [2, 1]));
