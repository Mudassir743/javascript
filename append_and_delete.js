function appendAndDelete(s, t, k) {
  let same_length = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      same_length++;
    } else break;
  }
  let total = s.length - same_length + (t.length - same_length);
  // console.log(same_length, total);
  if (total > k) {
    return "No";
  } else if ((k - total) % 2 === 0) {
    return "Yes";
  } else if (s.length + t.length <= k) {
    return "Yes";
  } else return "No";
}
console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
