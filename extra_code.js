function num(n) {
  let sum = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum += j;
    }
    console.log(sum);
    sum = "";
  }
}
console.log(num(5));
