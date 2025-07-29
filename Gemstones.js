function gemstones(arr) {
  // Write your code her
  let arry = [];
  let min_count = 0;
  for (let i = 0; i < arr.length; i++) {
    let set = [...new Set(arr[i])];
    arry.push(set);
    for (let j = 0; j < arry.length; j++) {
      //   if (arry[0][j] === arry[1][j]) min_count++;
      console.log(arry[0][j]);
    }
  }
  console.log(min_count);
  console.log(arry);
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));
// function gemstones(arr) {
//   let commonMinerals = new Set(arr[0]); // Pehle rock ke minerals se start karo

//   for (let i = 1; i < arr.length; i++) {
//     const currentSet = new Set(arr[i]); // Current rock ke minerals
//     // Keep only elements that are in both sets
//     commonMinerals = new Set([...commonMinerals].filter(mineral => currentSet.has(mineral)));
//   }

//   return commonMinerals.size; // Count of common minerals
// }

// console.log(gemstones(["abcdde", "baccd", "eeabg"]));  // Output: 2
