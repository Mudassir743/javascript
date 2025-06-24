function equalizeArray1(arr) {
  // Write your code here\
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let each = arr[i];
    if (freq[each]) {
      freq[each] = freq[each] + 1;
    } else freq[each] = 1;
  }
  console.log(freq);

  let max_freq = Math.max(...Object.values(freq));

  console.log(max_freq);

  let deleted_int = arr.length - max_freq;
  console.log(deleted_int);
}
equalizeArray1([3, 3, 1, 2, 3]);

function equalizeArray(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let each = arr[i];
    freq[each] = (freq[each] ||= 0) + 1;
  }
  let max_frq = Math.max(...Object.values(freq));
  let deleted_int = arr.length - max_frq;
  return "Deleted" + deleted_int;
}
console.log(equalizeArray([3, 3, 2, 1, 3]));
