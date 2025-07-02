(b = 5), (w = 5);
(bc = 2), (wc = 3), (z = 4);

function taumBday(b, w, bc, wc, z) {
  let black = Math.min(bc, wc + z);
  let white = Math.min(wc, bc + z);

  return BigInt(b) * BigInt(black) + BigInt(w) * BigInt(white);
}
console.log(taumBday(10, 10, 1, 1, 1));
console.log(taumBday(5, 9, 2, 3, 2));
console.log(taumBday(3, 6, 9, 1, 1));
console.log(taumBday(7, 7, 4, 2, 1));
console.log(taumBday(3, 3, 1, 9, 2));

// 10 10
// 1 1 1
// 5 9
// 2 3 4
// 3 6
// 9 1 1
// 7 7
// 4 2 1
// 3 3
// 1 9 2
