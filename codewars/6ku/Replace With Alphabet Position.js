const alphabetPosition = (text) => {
  const obj = {};
  const arr = [];
  const lowCaseText = text.toLowerCase();
  for (let i = 0; i < 26; i += 1) {
    obj[String.fromCharCode(65 + i).toLowerCase()] = i + 1;
  }
  for (let j = 0; j < text.length; j += 1) {
    if (obj[lowCaseText[j]]) {
      arr.push(obj[lowCaseText[j]]);
    }
  }
  return arr.join(' ');
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
