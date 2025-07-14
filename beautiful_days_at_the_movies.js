function beautifulDays(i, j, k) {
  let arr = [];
  let final_arr = [];
  let rev_arr = [];
  let result = 0;
  for (let num = i; num <= j; num++) {
    arr.push(num);
  }
  for (let n = 0; n < arr.length; n++) {
    let arr_to_str = arr[n].toString();
    let reversed_str = Number(arr_to_str.split("").reverse().join(""));
    rev_arr.push(reversed_str);
  }
  for (let m = 0; m < arr.length; m++) {
    result = Math.abs(arr[m] - rev_arr[m]);
    final_arr.push(result / k);
  }
  let count = 0;
  for (let c = 0; c < final_arr.length; c++) {
    if (Number.isInteger(final_arr[c]) && final_arr[c] >= 0) {
      count++;
    }
  }
  return count;
}
console.log(beautifulDays(20, 23, 6));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<""SMART CODE"">>>>>>>>>>>>>>>>>>>>>>>>>>>//

function beautifulDays(i, j, k) {
  let count = 0;

  for (let num = i; num <= j; num++) {
    let reversed = Number(num.toString().split("").reverse().join(""));
    if (Math.abs(num - reversed) % k === 0) {
      count++;
    }
  }

  return count;
}

console.log(beautifulDays(20, 23, 6)); // Output: 2
