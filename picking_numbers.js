function pickingNumbers(a) {
  // Write your code here
  let count = {};
  for (let i = 0; i < a.length; i++) {
    let freq = a[i];
    if (count[freq]) {
      count[freq] = count[freq] + 1;
    } else count[freq] = 1;
    let array = [];
    for (let j = i + 1; j < a.length; j++) {
      if (freq) {
        freq + freq;
        array.push(freq);
      }
    }
    console.log(array);
  }
  console.log(count);
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

let a = 1 - 3;
console.log(Math.abs(a));
