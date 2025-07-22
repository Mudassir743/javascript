// // // function pangrams(s) {
// // //   let upperCase = s.toUpperCase();
// // //   console.log(upperCase);
// // //   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // //   let string = "";
// // //   for (let i = 0; i < upperCase.length; i++) {
// // //     let char = upperCase[i];
// // //     if (letters.includes(char)) {
// // //       if (!string.includes(char)) {
// // //         string += char;
// // //       }
// // //     }
// // //   }
// // //   let count = 0;
// // //   for (let i = 0; i < string.length; i++) {
// // //     if (string[i]) count++;
// // //   }
// // //   console.log(count);
// // //   console.log(string);
// // //   if (count === 26) return "pangrams";
// // //   else return "not pangrams";
// // // }
// // // console.log(
// // //   pangrams("We promptly judged antique ivory buckles for the next prize")
// // // );
// // // console.log(pangrams("We promptly judged antique ivory buckles for the prize"));

// function pangrams(s) {
//   let upperCase = s.toUpperCase();
//   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let string = "";
//   for (let i = 0; i < upperCase.length; i++) {
//     let char = upperCase[i];
//     if (letters.includes(char)) if (!string.includes(char)) string += char;
//   }
//   if (string.length === 26) return "pangrams";
//   else return "not pangrams";
// }
// console.log(
//   pangrams("We promptly judged antique ivory buckles for the next prize")
// );
// console.log(pangrams("We promptly judged antique ivory buckles for the prize"));

// const array = ["apple", "banana", "apple"];

function pangrams(s) {
  const modified = s.replaceAll(" ", "").toUpperCase().split("");
  const set = [...new Set(modified)];
  if (set.length === 26) return "pangram";
  else return "not pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
);
