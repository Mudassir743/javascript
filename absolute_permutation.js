function absolutePermutation(n, k) {
  // Case 1: k == 0 → return identity permutation [1, 2, ..., n]
  if (k === 0) {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  // Case 2: If n is not divisible by 2k → no valid permutation
  if (n % (2 * k) !== 0) {
    return [-1];
  }

  // Case 3: Build permutation in blocks of size k
  const result = [];
  let add = true;

  for (let i = 1; i <= n; i++) {
    if (add) {
      result.push(i + k);
    } else {
      result.push(i - k);
    }

    // Toggle add every k elements
    if (i % k === 0) {
      add = !add;
    }
  }

  return result;
}
