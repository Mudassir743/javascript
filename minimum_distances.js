function minimumDistances(a) {
  let minDistance = Infinity;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        let distance = j - i;
        minDistance = Math.min(minDistance, distance);
      }
    }
  }
  return minDistance === Infinity ? -1 : minDistance;
  // if (minDistance === Infinity) {
  //   return -1;
  // } else return minDistance;
}
console.log(minimumDistances([7, 1, 3, 4, 5, 7]));
