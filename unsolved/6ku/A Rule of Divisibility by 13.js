const thirt = (n) => {
  const arr1 = [1, 10, 9, 12, 3, 4];
  const arr = `${n}`.split('').map(Number).reverse();
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i] + arr1[i];
  }
  // if (sum === thirt(sum))
  return sum;
};
console.log(thirt(8529));
