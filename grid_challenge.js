function gridChallenge(grid) {
  // Write your code here
  let array = [];
  for (let i = 0; i < grid.length; i++) {
    let str = grid[i].split("");
    let sorted_str = str.sort();
    // console.log(" SORTED STR==>>", sorted_str);
    // console.log(str);
    for (let j = 0; j < sorted_str.length; j++) {
      let char = sorted_str[j].charCodeAt();
      //   console.log(sorted_str[j]);
      //   if (char === char + 1) return "YES";
      array.push(char);
    }
  }
  console.log(array);
  for (let k = 0; k < array.length; k++) {
    if (
      array[k] + 1 - array[k + 1] !== 0 ||
      array[k] + 1 - array[k + 1] !== 1
    ) {
      return "NO";
    }
    break;
  }
  return "YES";
}
console.log(gridChallenge(["kc", "iu"]));
