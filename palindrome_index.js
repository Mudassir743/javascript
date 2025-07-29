function palindromeIndex(s) {
  // Write your code here

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] === s[i - 1]) {
      console.log("yes");
    }
  }
}
console.log(palindromeIndex("aaab"));
