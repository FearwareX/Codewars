// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) {
    return true;
  }
  const maximumDividor = Math.sqrt(num) + 1;
  for (let i = 2; i < maximumDividor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1));
