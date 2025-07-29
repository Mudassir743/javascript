function findMedian(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let arr_length = arr.length;
  let mid = Math.floor(arr_length / 2);
  if (arr_length % 2 !== 0) return arr[mid];
  else return arr[mmid - 1] + arr[mid];
}
console.log(findMedian([12, 10, 5, 7, 3]));
