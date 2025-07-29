function icecreamParlor(m, arr) {
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) return [i + 1, j + 1];
    }
  }
}
console.log(icecreamParlor(4, [1, 2, , 5, 6, 3, 7]));
console.log(2 ^ (0 * 3));
