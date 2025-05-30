function beautifulDays(i, j, k) {
  // Write your code here
  let reverse_Num = 0;
  for (let num = i; num <= j; num++) {
    reverse_Num = reverse_Num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(reverse_Num);
}
console.log(beautifulDays(22, 24, 6));
