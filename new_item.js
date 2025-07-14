// function introTutorial(V, arr) {
//   // Write your code here

//   let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === V) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// }
// console.log(introTutorial(4, [1, 2, 3, 4, 5]));
// let candles = [3, 1, 2, 3];

function birthdayCakeCandles(candles) {
  let large = 0;
  const sortedCandles = candles.sort();
  console.log(sortedCandles);
  //   for (let i = candles.length - 1; i < candles.length; i--) {
  for (let i = 0; i < candles.length; i++) {
    if (sortedCandles[i] === Math.max(...candles)) large++;
    else break;
  }

  console.log(large);
}

console.log(birthdayCakeCandles([3, 1, 2]));
let arr = [5, 3, 8, 1, 2];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      console.log(arr); // [1, 2, 3, 5, 8]
    }
  }
}
