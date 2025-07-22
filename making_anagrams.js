// // Write your code here
// //   let count = 0;
// //   for (let i = 0; i < s1.length; i++) {
// //     // for (let j = i + 1; j < s2.length; j++) {
// //     if (s1[i] !== s2[i]) count++;
// //     console.log(s1[i], s2[i], count);
// //   }
// function makingAnagrams(s1, s2) {
//   let count = 0;
//   for (let i = 0; i < s1.length; i++) {
//     for (let j = i + 1; j < s1.length; j++) {
//       if (s1[i] !== s2[i]) count++;
//       console.log(s1[i], s2[i]);
// //     }
// //   }
// //   console.log(count);
// // }
// // console.log(makingAnagrams("abc", "cde"));
// let arr = [1, 5, 10, 2, 7, 9, 3, 6, 5, 8, 7];
// let k = 12;
// let Term1 = 0;
// let Term2 = 0;
// let Term3 = 0;
// let totalSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = [i + 1]; j < arr.length; j++) {
//     for (let n = [j + 1]; n < arr.length; n++) {
//       if (arr[i] + arr[j] + arr[n] === k) {
//         Term1 = arr[i];
//         Term2 = arr[j];
//         Term3 = arr[n];
//         console.log(arr[i] + " + " + arr[j] + " + " + arr[n]);
//         totalSum = Term1 + Term2 + Term3;
//         break;
//       }
//     }
//   }
// }

// console.log(
//   "Term1==>",
//   Term1,
//   "Term2==>",
//   Term2,
//   "Term3==>",
//   Term3,
//   "TotalSum==>",
//   totalSum
// );

function beautifulTriplets(d, arr) {
  // Write your code here
  let term_1 = 0;
  let term_2 = 0;
  let term_3 = 0;
  let total_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = [i + 1]; arr.length; j++) {
      for (let k = [j + 1]; arr.length; k++) {
        if (arr[i] - arr[j] - arr[k] === d) {
          term_1 = arr[i];
          term_2 = arr[j];
          term_3 = arr[k];
          //   console.log(arr[i] + " + " + arr[j] + " + " + arr[k]);
          total_sum = term_1 - term_2 - term_3;
          break;
        }
      }
    }
  }
  console.log("TOTAL SUM==>", term_1);
}
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
