const tickets = (peopleInLine) => {
  let tf = 0;
  let ft = 0;
  for (element of peopleInLine) {
    if (element === 25) tf += 1;
    if (element === 50) {
      tf -= 1;
      ft += 1;
    }
    if (element === 100) {
      tf -= 1;
      ft > 0 ? (ft -= 1) : (tf -= 2);
    }
    if (tf < 0 || ft < 0) {
      return 'NO';
    }
  }
  return 'YES';
};
console.log(tickets([25, 50]));

// function tickets(peopleInLine) {
//   let [c25, c50] = [0, 0];
//   for (let v of peopleInLine) {
//     if (v === 25) c25++;
//     if (v === 50) {
//       c50++;
//       c25-=1;
//     }
//     if (v === 100) {
//       c25-=1;
//       c50 > 0 ? c50-=1 : (c25 -= 2);
//     }
//     if (c25 < 0 || c50 < 0) return 'NO';
//   }
//   return 'YES';
// }
