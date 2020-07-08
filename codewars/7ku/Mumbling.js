const accum = (s) => {
  const arr = s.split('').map((x) => `${x}`.toUpperCase());
  let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    str += `${arr[i]}${`${arr[i]}`.toLowerCase().repeat(i)}-`;
  }
  return str.slice(0, -1);
};
console.log(accum('ZpglnRxqenU'));
