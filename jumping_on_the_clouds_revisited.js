function jumpingOnClouds(c, k) {
  let energy = 100;
  let pos = 0;
  for (let i = 0; i < c.length / k; i++) {
    pos = (pos + k) % c.length;
    energy -= 1;
    if (c[pos] === 1) energy -= 2;
    console.log(energy);
  }
  return energy;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1], 2));
