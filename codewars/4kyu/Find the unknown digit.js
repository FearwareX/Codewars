const solveExpression = (exp) => {
  exp = exp.replace('=', '==').replace('--', '+');
  for (let i = 0; i < 10; i += 1) {
    if (eval(exp.replace(/\?/g, i)) && !exp.includes(i)) {
      if (!/^00+$/.test(exp.replace(/\?/g, i).split('==')[1])) return i;
    }
  }
  return -1;
};

console.log(solveExpression('1+1=?'));
