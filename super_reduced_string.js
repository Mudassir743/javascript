// function superReducedString(s) {
//   // Write your code here
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     let each_string = s[i];
//     if (arr.length > 0 && arr[arr.length - 1] === each_string) {
//       arr.pop();
//     } else {
//       arr.push(each_string);
//     }
//   }
//   let result = arr.join("");
//   if (result === "") return "Empty String";
//   else return result;
// }
// console.log(superReducedString("aaabaccddd"));
function superReducedString(s) {
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    let each_string = s[i];
    freq[each_string] = (freq[each_string] || 0) + 1;
  }
  console.log(freq);
  let string = "";
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (freq[str] % 2 !== 0) string += str;
    freq[str] = 0;
  }
}
console.log(superReducedString("aaabccddd"));
