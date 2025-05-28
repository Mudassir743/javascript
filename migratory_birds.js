// function migratoryBirds(arr) {
//   let bird = {};
//   // let array = [0];
//   for (let i = 0; i < arr.length; i++) {
//     let each = arr[i];
//     if (bird[each]) {
//       bird[each] = bird[each] + 1;
//     } else bird[each] = 1;
//     // for (let j = 0; j < arr.length; j++) {
//     //   let each1 = arr[j];
//     //   if (each === each1) {
//     //     array.push(Math.max(...arr));
//     // }
//     // }
//   }

//   console.log(bird);
// }

// migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
function migratoryBirds(arr) {
  let bird_count = {};
  let max_frequevcy = 0;
  let frequency_element;
  for (let i = 0; i < arr.length; i++) {
    let each = arr[i];
    if (bird_count[each]) {
      bird_count[each] += 1;
    } else bird_count[each] = 1;

    if (
      bird_count[each] > max_frequevcy ||
      (bird_count[each] === max_frequevcy && each < frequency_element)
    ) {
      max_frequevcy = bird_count[each];
      console.log(max_frequevcy);
      frequency_element = each;
      console.log(frequency_element);
    }
  }
  return { element: frequency_element, frequency: max_frequevcy };
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 3, 2, 1, 4]));
