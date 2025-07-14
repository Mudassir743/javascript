function minimumAbsoluteDifference(arr) {
  let min_diff = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = Math.abs(arr[i] - arr[j]);
      min_diff = Math.min(diff, min_diff);
    }
  }
  return min_diff;
}
console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]) //1
);
