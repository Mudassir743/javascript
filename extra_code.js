function num(n) {
  let sum = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      sum += j;
    }
    console.log(sum);
    sum = "";
  }
}
console.log(num(5));
