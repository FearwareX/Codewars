const myFilter = (callback, thisArg) => {
  if (this === undefined) {
    throw new TypeError('this is null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback}is not a function`);
  }

  const res = [];
  // 让O作为回调函数对象传递
  const O = Object(this);

  const len = O.length >>> 0;
  for (let i = 0; i < len; i += 1) {
    // 检查O是否存在O的属性
    if (i in O) {
      // 回调函数调用传参
      if (callback.call(thisArg, O[i], O)) {
        res.push(O[i]);
      }
    }
  }
  return res;
};
