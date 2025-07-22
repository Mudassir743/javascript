function marsExploration(s) {
  //   let s = [];
  //   for (let i = 0; i < s.length; i += 3) {
  //     arr.push(s.slice(i, i + 3));
  //   }
  let count = 0;
  let expected = "SOS";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== expected[i % 3]) count++;
    console.log(s[i]);
  }
  return count;
}
console.log(marsExploration("SOSSPSSQSSOS"));
console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));
