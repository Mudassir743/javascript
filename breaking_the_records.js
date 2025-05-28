// function breakingRecords(scores) {
//   let max_count = 0;
//   let min_count = 0;
//   let max = scores[0];
//   let min = scores[0];
//   for (let i = 1; i < scores.length; i++) {
//     let score = scores[i];
//     if (score > max) {
//       max = score;
//       max_count++;
//     } else if (score < min) {
//       min = score;
//       min_count++;
//     }
//     console.log(`MAX COUNT ${max_count} MIN COUNT ${min_count}`);
//   }
//   return [max_count, min_count];
// }
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25]));

function breakingRecords(scores) {
  let max_count = 0;
  let min_count = 0;
  let max = scores[0];
  let min = scores[0];
  for (let i = 1; i < scores.length; i++) {
    let num = scores[i];
    if (num > max) {
      max = num;
      max_count++;
      console.log(max_count);
    } else if (num < min) {
      min = num;
      min_count++;
    }
    console.log("MIN COUNT", min_count);
  }
  return [max_count, min_count];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
