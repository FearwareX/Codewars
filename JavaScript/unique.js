/* 数组去重 */

// 1. 利用Set
const unique1 = (arr) => [...new Set(arr)];

// console.log(unique1([1, 1, 1, 2, 3, 6, 8]));

// 2. 利用Set去重(改进可对对象去重)
const unique2 = (arr) => {
  const result = new Set();
  return arr.filter((item) => {
    // 创建一个可以唯一标识对象的字符串id
    const id = item + JSON.stringify(item);
    if (result.has(id)) {
      return false;
    }
    result.add(id);
    return true;
  });
};

// console.log(unique2([1, 1, 2, { a: 1 }, { a: 1 }, true, true, 'true', 'true']));

// 3. for循环遍历查找
const unique3 = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        // 每删除一个数,j-- 保证j的值经过自加后不变,len-- 提升性能
        len -= 1;
        j -= 1;
      }
    }
  }
  return arr;
};

// console.log(unique3([1, 1, 2, true, true, 'true', 'true']));

// 4. indexOf查找
const unique4 = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
};

// console.log(unique4([1, 1, 2, true, true, 'true', 'true']));

// 5. include查找
const unique5 = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

// console.log(unique5([1, 1, 2, true, true, 'true', 'true']));

// 6. filter过滤

const unique6 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(unique6([1, 1, 2, true, true, 'true', 'true']));

// 7. 利用Map

const unique7 = (arr) => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
};

// console.log(unique7([1, 1, 2, true, true, 'true', 'true']));
