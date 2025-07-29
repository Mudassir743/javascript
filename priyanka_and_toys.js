function toys(w) {
  // Write your code here
  let sorted = w.sort((a, b) => a - b);
  //   console.log(sorted);
  let add = 0;
  for (let i = 0; i < sorted.length; i++) {
    let min_weight = sorted[i];
    let max_weight = min_weight + 4;
    // console.log(max_weight);
  }
  for (let i = 0; i < sorted.length && sorted[i]; i++) {
    add++;
  }

  return add;
}
console.log(toys([1, 2, 3, 21, 7, 12, 14, 21]));
// function toys(w) {
//   // Write your code here
// }
// function toys(weights) {
//   weights.sort((a, b) => a - b);

//   let containers = 0;
//   let i = 0;

//   while (i < weights.length) {
//     let minWeight = weights[i];
//     let maxWeight = minWeight + 4;
//     while (i < weights.length && weights[i] <= maxWeight) {
//       i++;
//     }
//     containers++;
//   }

//   return containers;
// }
