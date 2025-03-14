let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here

  let negative = 0;
  let positive = 0;
  let zero = 0;
  let n = 6;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negative++;
    if (arr[i] > 0) positive++;
    if (arr[i] == 0) zero++;
  }
  console.log((negative / n).toFixed(6));
  console.log((positive / n).toFixed(6));
  console.log((zero / n).toFixed(6));

  console.log(negative, positive, zero);
}
plusMinus(arr);
