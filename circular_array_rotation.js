// function circularArrayRotation(a, k, queries) {
//   for (let i = 0; i < k; i++) {
//     let last = a.pop();
//     a.unshift(last);
//     console.log(a);
//   }
//   let result = [];
//   for (let i = 0; i < queries.length; i++) {
//     result.push(a[queries[i]]);
//   }
//   return result;
// }
// console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
// let array = [1, 2, 3];
// let arr = array.pop();
// array.unshift(arr);
// console.log(array);
// let arr2 = array.pop();
// array.unshift(arr2);
// console.log(array);
function countingSort(arr) {
  // Write your code here

  let sorted = arr.sort();
}
console.log(countingSort([]));
