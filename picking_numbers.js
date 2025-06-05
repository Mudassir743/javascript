// function pickingNumbers(a) {
//   // Write your code here
//   let count = {};
//   for (let i = 0; i < a.length; i++) {
//     let freq = a[i];
//     if (count[freq]) {
//       count[freq] = count[freq] + 1;
//     } else count[freq] = 1;
//     let array = [];
//     for (let j = i + 1; j < a.length; j++) {
//       if (freq) {
//         freq + freq;
//         array.push(freq);
//       }
//     }
//     console.log(array);
//   }
//   console.log(count);
// }

// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

// let a = 1 - 3;
// console.log(Math.abs(a));

function pickingNumbers(a) {
  let freq = {};
  for (let i = 0; i < a.length; i++) {
    let arr = a[i];

    if (freq[arr]) {
      freq[arr] = freq[arr] + 1;
    } else freq[arr] = 1;
  }
  let max = 0;
  for (let key in freq) {
    let crnt = freq[key];
    let next = freq[parseInt(key) + 1] || 0;
    let total = crnt + next;
    if (total > max) {
      max = total;
    }
  }
  return max;
}
console.log(pickingNumbers([98, 3, 99, 1, 97, 2]));
