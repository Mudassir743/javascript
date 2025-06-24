function repeatedString(s, n) {
  let count = 0;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s[i % s.length];
  }
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "a") count++;
  }
  return count;
}
console.log(repeatedString("a", 10));

// let a = "ab";
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//     let repeated= repeat()
//   if (a[i] === "a") count++;
// }
// console.log(count);
function repeatedString(s, n) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      return n;
    }
  }
}
console.log(repeatedString("a", 100000000000));

let star = "🔸";

let stars = star.repeat(10);

console.log(stars);
