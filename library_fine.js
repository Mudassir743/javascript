// function libraryFine(d1, m1, y1, d2, m2, y2) {
//   // Write your code here

//   if (d1 > d2) {
//     return (d1 - d2) * 15;
//   } else if (d1 === d2 && m1 > m2) {
//     return (m1 - m2) * 500;
//   } else if (d1 === d2 && m1 === m2 && y1 > y2) {
//     return 10000;
//   } else return 0;
// }
// console.log(libraryFine(9, 6, 2015, 6, 6, 2015));

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) {
    return 10000;
  } else if (y1 == y2 && m1 > m2) {
    return (m1 - m2) * 500;
  } else if (y1 === y2 && m1 === m2 && d1 > d2) {
    return (d1 - d2) * 15;
  }
}
console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
