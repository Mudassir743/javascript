function missingNumbers(arr, brr) {
  let sum = 0;
  let sum1 = 0;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < brr.length; j++) {
      if (arr !== brr) {
        array = arr.push(arr[i]);
        console.log(array);
      }
    }
  }
  console.log(sum1);
  console.log(sum !== sum1);
}
missingNumbers(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);
