function maximizingXor(l, r) {
  // Write your code here
  let max = 0;
  for (let a = l; a <= r; a++) {
    for (let b = l; b <= r; b++) {
      max = Math.max(max, a ^ b);
    }
  }
  return max;
}
console.log(maximizingXor(10, 15));
