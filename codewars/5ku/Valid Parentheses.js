function validParentheses(parens) {
  parens.replace(/\([^()]*(((?'Open'\()[^()]*)+((?'-Open'\))[^()]*)+)*\)/g, ' ');
  return parens;
}
console.log(validParentheses('()()'));
