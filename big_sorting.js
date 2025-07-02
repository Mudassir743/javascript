const maxNumber = (array) => {
  let max = -1;

  for (let i = 0; i < array.length; i++) {
    let eachItem = Number(array[i]);
    if (max < eachItem) max = eachItem;
  }

  return max;
};
console.log(maxNumber(1, 3, 2, 5, 6, 7, 8));
function bigSorting(unsorted) {
  let max = maxNumber(unsorted);

  let arr = Array.from({ length: max });

  for (let i = 0; i < unsorted.length; i++) {
    let eachItem = Number(unsorted[i]);

    arr[eachItem - 1] = eachItem;
  }

  arr = arr.filter((each) => each);

  console.log(arr);
}
bigSorting(["8, 1, 2, 100"]);

function bigSorting(unsorted) {
  let result = unsorted.sort((a, b) => a - b);

  return result;
}

console.log(bigSorting(["8", "1", "2", "100", "100000000000000000000", "2"]));

// bigSorting([
//   8,
//   1,
//   2,
//   100,
//   12303479849857341718340192371n,
//   3084193741082937,
//   3084193741082938,
//   111,
//   200,
// ]);
//   let sorts = unsorted.sort(function (a, b) {
//     return a - b;
//   });
