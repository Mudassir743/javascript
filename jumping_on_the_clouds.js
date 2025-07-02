function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length - 1; ) {
    if (i + 2 < c.length && c[i + 2] === 0) {
      i += 2;
    } else i += 1;
    jumps++;
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

// function jumpingOnClouds(c) {
//   let jump = 0;
//   for (let i = 0; i < c.length - 2 && -1; i++) {
//     if (c[i] === 0) jump++;
//   }
//   console.log(jump);
// }
// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
