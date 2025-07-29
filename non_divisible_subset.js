function nonDivisibleSubset(k, s) {
  // Write your code here

  let arr = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let siri = s[i] + s[j];
      arr.push(siri);
      if (siri % k !== 0) count++;
    }
    // console.log(arr);
  }
  console.log(count);
}
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
