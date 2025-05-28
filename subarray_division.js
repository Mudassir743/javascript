function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}
console.log(birthday([4], 4, 1));
