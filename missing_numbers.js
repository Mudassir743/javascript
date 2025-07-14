function missingNumbers(arr, brr) {
  let result = [];
  let freq_arr = {};
  let freq_brr = {};
  for (let i = 0; i < arr.length; i++) {
    let each_arr = arr[i];
    freq_arr[each_arr] = (freq_arr[each_arr] || 0) + 1;
  }
  for (let i = 0; i < brr.length; i++) {
    let each_brr = brr[i];
    freq_brr[each_brr] = (freq_brr[each_brr] || 0) + 1;
  }
  for (let key in freq_brr) {
    let count_brr = freq_brr[key];
    let count_arr = freq_arr[key] || 0;
    if (count_brr > count_arr) result.push(Number(key));
  }

  let final_resut = result.sort((a, b) => a - b);
  return final_resut;
}
console.log(
  missingNumbers(
    [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
    [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
  )
);
