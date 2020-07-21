function duplicateCount(text) {
  const str = text.toLowerCase();
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.lastIndexOf(str[i]) !== i && result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result.length;
}

console.log(duplicateCount('abcdeb'));
