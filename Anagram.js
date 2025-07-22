function anagrame(s) {
  if (s.length % 2 !== 0) return -1;
  let mid = s.length / 2;
  let string_1 = s.slice(0, mid);
  let string_2 = s.slice(mid);
  console.log(string_1, string_2);

  let freqS1 = {};
  let freqS2 = {};
  for (let i = 0; i < string_1.length; i++) {
    let each_strg_1 = string_1[i];
    freqS1[each_strg_1] = (freqS1[each_strg_1] || 0) + 1;
  }
  for (let i = 0; i < string_2.length; i++) {
    let each_strg_2 = string_2[i];
    freqS2[each_strg_2] = (freqS2[each_strg_2] || 0) + 1;
  }
  console.log(freqS1, freqS2);

  let change = 0;
  for (let char in freqS1) {
    let countInS1 = freqS1[char];
    let countInS2 = freqS2[char] || 0;
    if (countInS1 > countInS2) change += countInS1 - countInS2;
  }
  console.log(change);
}
console.log(anagrame("aaabbb"));

// // function anagram(s) {
// // Agar string ki length odd hai to -1 return karo
// if (s.length % 2 !== 0) {
//   return -1;
// }

// // String ko 2 equal parts mein divide karo
// let mid = s.length / 2;
// let each_strg_1 = s.slice(0, mid);
// let s2 = s.slice(mid);

// // Dono halves ke character counts banate hain
// let freq1 = {};
// let freq2 = {};

// for (let char of s1) {
//   freq1[ch] = (freq1[ch] || 0) + 1;
// }

// for (let ch of s2) {
//   freq2[ch] = (freq2[ch] || 0) + 1;
// }

// // Check karo s1 ke kitne characters s2 mein match nahi karte
// let changes = 0;
// for (let ch in freq1) {
//   let countInS1 = freq1[ch];
//   let countInS2 = freq2[ch] || 0;

//   // Jo extra letters s1 mein hain unhe change karna padega
//   if (countInS1 > countInS2) {
//     changes += countInS1 - countInS2;
//   }
// }

// return changes;
// // }
