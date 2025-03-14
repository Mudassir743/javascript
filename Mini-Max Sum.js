let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  let num = arr.indexOf(Math.max(...arr));
  let removed = arr.splice(num, 1)[0];
  let min = 0;
  for (let element of arr) min += element;
  let numb = arr.indexOf(Math.min(...arr));
  arr.splice(numb, 1, removed);
  let max = 0;
  for (let element of arr) max += element;
  console.log(min, max);

  //   let max = Math.max(...arr);
  //   let min = Math.min(...arr);
  //   let sum = arr.reduce((a, b) => a + b);
  //   console.log(sum - min, sum - max);
}
console.log(miniMaxSum(arr));

// let arr = [1, 2, 3, 4, 5];

// function miniMaxSum(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let sum = arr.reduce((a, b) => a + b);
//   console.log(sum - max, sum - min);
// }
// miniMaxSum(arr);
