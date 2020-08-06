const number2words = (n) => {
  const arr1 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const arr3 = ['hundred', 'thousand'];
  if (n < 20) {
    return arr1[n];
  }
  if (n < 100) {
    return `${arr2[Math.floor(n / 10) - 2]}${n % 10 ? `-${arr1[n % 10 || '']}` : ''}`;
  }
  if (n < 1000) {
    return `${arr1[Math.floor(n / 100)]} ${arr3[0]}${n % 100 ? ` ${number2words(n % 100)}` : ''}`;
  }
  return `${number2words(Math.floor(n / 1000))} thousand${n % 1000 ? ` ${number2words(n % 1000)}` : ''}`;
};
console.log(number2words(1000));
