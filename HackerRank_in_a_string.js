function hackerrankInString(s) {
  let str = "hackerrank";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === str[count]) count++;
    // console.log("STR==>>", str[count], str[i]);
    if (count === str.length) return "YES";
  }
  return "NO";
}

console.log(hackerrankInString("hhaacckkekraraannk"));
console.log(hackerrankInString("hackerworld"));
