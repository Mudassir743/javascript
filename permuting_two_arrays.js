function twoArrays(k, A, B) {
  let sort_A = A.sort((a, b) => a - b);
  let sort_B = B.sort((a, b) => b - a);
  for (let i = 0; i < sort_A.length; i++) {
    if (sort_A[i] + sort_B[i] < k) return "NO";
  }
  return "YES";
}
console.log(twoArrays(5, [2, 2, 1, 1], [3, 3, 3, 4]));
