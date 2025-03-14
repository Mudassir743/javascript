let array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(array) {
  let sum = 0;
  let sum1 = 0;
  for (let n = 0; n < array.length; n++) {
    sum += array[n][n];
    sum1 += array[n][array.length - 1 - n];
  }
  return Math.abs(sum - sum1);
}

console.log(diagonalDifference(array));
