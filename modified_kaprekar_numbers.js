function kaprekarNumbers(p, q) {
  // Write your code here

  for (let i = p; i <= q; i++) {
    let num = i * i;

    let len = num[i];
    console.log(num, len);
  }
}

console.log(kaprekarNumbers(1, 100));
