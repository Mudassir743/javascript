// function insertionSort2(n, arr) {
//   // Write your code here

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let move = arr[j];
//         arr[i] = arr[j + 1];
//         arr[j + 1] = move;
//       }
//       console.log(arr);
//     }
//   }
// }
function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    // console.log(key);
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
    console.log(arr.join(" "));
  }
}
console.log(insertionSort2(10, [3, 4, 5, 6, 5, 7, 6, 4, 3, 1]));
