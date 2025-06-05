function hurdleRace(k, height) {
  let max_count = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > max_count) {
      max_count = height[i];
      console.log(max_count, height[i]);
    }
  }
  //   max_count = Math.max(...height);
  //   console.log(max_count);
  if (max_count > k) {
    return max_count - k;
  } else return 0;
}
console.log(hurdleRace(5, [1, 6, 3, 5, 2, 7]));

function max(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(`VALUE OF MAX ARRAY ==>>${max} `);
}
console.log(
  max([
    2, 3, 4, 5, 6, 7, 8, 9, 7, 67, 6, 5,

    43, 3, 4, 5,

    67,

    7, 88,

    8,
  ])
);
