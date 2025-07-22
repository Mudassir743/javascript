function twoStrings(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    //   console.log(s2[j]);
    if (s1[i] == s2[j]) return "YES";
  }
  return "NO";
}

console.log(twoStrings("hello", "world"));

function twoStrings(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) return "YES";
  }
  return "NO";
}

console.log(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc"));
console.log(twoStrings("hackerrankcommunity", "cdecdecdecde"));
console.log(twoStrings("jackandjill", "wentupthehill"));
console.log(twoStrings("writetoyourparents", "fghmqzldbc"));
