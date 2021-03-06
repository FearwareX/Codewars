/* eslint-disable no-restricted-syntax */
const firstUniqChar = (s) => {
  const position = new Map();
  const n = s.length;
  for (const [i, ch] of Array.from(s).entries()) {
    if (position.has(ch)) {
      position.set(ch, -1);
    } else {
      position.set(ch, i);
    }
  }
  let first = n;
  for (const pos of position.values()) {
    if (pos !== -1 && pos < first) {
      first = pos;
    }
  }
  if (first === n) {
    first = -1;
  }
  return first;
};
// eslint-disable-next-line no-console
console.log(firstUniqChar('1341'));
