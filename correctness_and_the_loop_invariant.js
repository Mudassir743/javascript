function insertionSort(ar) {
  for (let i = 1; i < ar.length; i++) {
    for (let j = 0; j < i; j++) {
      if (ar[i] < ar[j]) {
        let temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      }
    }
  }
  console.log(ar.join(" "));
}
insertionSort([4, 1, 30, 5, 6, 2]);
// function insertionSort(s, ar) {
//   for (i = 1; i < s; i++) {
//     let j = i - 1;
//     while (ar[j] > ar[i]) {
//       let a = ar[i];
//       ar[i] = ar[j];
//       ar[j] = a;
//       j--;
//     }
//   }
//   console.log(ar);
// }
// function insertionSort(ar) {
//   for (i = 1; i < ar.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (ar[i] < ar[j]);
//       let temp = ar[i];
//       ar[i] = ar[j];
//       ar[j] = temp;
//     }
//   }
//   return ar;
// }

// //get input for ar
// console.log(insertionSort([7, 4, 3, 5, 6, 2]));
//print a,r
