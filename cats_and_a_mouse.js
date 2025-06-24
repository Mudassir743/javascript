function catAndMouse(x, y, z) {
  let cat_A = Math.abs(x - z);
  let cat_B = Math.abs(y - z);
  if (cat_A < cat_B) {
    return "Cat A";
  } else if (cat_B < cat_A) {
    return "Cat B";
  } else return "Mouse C";
}

console.log(catAndMouse(2, 5, 4));
