function rgb(r, g, b) {
  let result = '';
  result =
    ((Math.abs(r) < 255 ? r : 255) < 0 ? 0 : Math.abs(r) < 255 ? r : 255).toString(16).padStart(2, '0') +
    ((Math.abs(g) < 255 ? g : 255) < 0 ? 0 : Math.abs(g) < 255 ? g : 255).toString(16).padStart(2, '0') +
    ((Math.abs(b) < 255 ? b : 255) < 0 ? 0 : Math.abs(b) < 255 ? b : 255).toString(16).padStart(2, '0');

  return result.toUpperCase();
}
const rgb1 = (...args) => args.reduce((r, c) => r + Math.max(0, Math.min(255, c)).toString(16).padStart(2, '0').toUpperCase(), '');
console.log(rgb(173, 255, 47));
console.log(rgb1(173, 255, 47));
