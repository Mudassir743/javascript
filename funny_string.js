// function funnyString(s) {
//   // Write your code here
//   let reversed = "";
//   let arr1 = [];
//   let arr2 = [];
//   let result = [];
//   let result2 = [];

//   for (let i = s.length - 1; i >= 0; i--) {
//     reversed += s[i];
//   }
//   //   console.log(reversed);
//   for (let i = 0; i < reversed.length; i++) {
//     let convert_1 = s.charCodeAt(i);
//     let convert_2 = reversed.charCodeAt(i);
//     arr1.push(convert_1);
//     arr2.push(convert_2);
//     // console.log(convert_1, convert_2);
//   }
//   for (let i = 0; i < arr1.length - 1; i++) {
//     let diff1 = arr1[i + 1] - arr1[i];
//     let diff2 = arr2[i + 1] - arr2[i];
//     result.push(Math.abs(diff1));
//     result2.push(Math.abs(diff2));
//   }
//   let result_count = 0;
//   let result2_count = 0;
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === result2[i]) {
//       result_count++;
//       result2_count++;
//       if (result_count.length === result2_count) {
//         console.log("FUNNY STRING");
//       } else console.log("NOT FUNNY");
//     }
//     console.log(result, result2);
//     console.log(arr1, arr2);
//   }
// }

// console.log(funnyString("ivvkx"));
// console.log(funnyString("ivvkxq"));
function funnyString(s) {
  // Write your code here
  let reversed = "";
  let arr1 = [];
  let arr2 = [];
  let result = [];
  let result2 = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
    console.log(reversed);
  }
  for (let i = 0; i < reversed.length; i++) {
    let convert_1 = s.charCodeAt(i);
    let convert_2 = reversed.charCodeAt(i);
    arr1.push(convert_1);
    arr2.push(convert_2);
    console.log(convert_1, convert_2);
  }
  for (let i = 0; i < arr1.length - 1; i++) {
    let diff1 = arr1[i + 1] - arr1[i];
    let diff2 = arr2[i + 1] - arr2[i];
    result.push(Math.abs(diff1));
    result2.push(Math.abs(diff2));
  }
  let result_count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result2[i]) result_count++;
  }
  console.log(result, result2);
  console.log(arr1, arr2);
  console.log(result_count);
  if (result.length === result_count) {
    console.log("FUNNY STRING");
  } else console.log("NOT FUNNY");
}
funnyString("abcr");
