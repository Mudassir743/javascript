function countingValleys(steps, path) {
  let current_level = 0;
  let count_vall = 0;
  for (let i = 0; i < steps; i++) {
    let step = path[i];
    if (step === "U") {
      current_level++;
      if (current_level === 0) {
        count_vall++;
      }
    } else if (step === "D") {
      current_level--;
    }
  }
  return count_vall;
}
console.log(
  countingValleys(
    57,
    "UDDDUDUUDUDUUDDDUUDUDUDUUDDUUDUDDUUUUDDDDDUUDUDUUDUDUUDDU"
  )
);

let a = "UDDDUDUUDUDUUDDDUUDUDUDUUDDUUDUDDUUUUDDDDDUUDUDUUDUDUUDDU";

let b = {};
for (let i = 0; i < a.length; i++) {
  let arr = a[i];
  if (b[arr]) {
    b[arr] = b[arr] + 1;
  } else b[arr] = 1;
}
console.log(b);
