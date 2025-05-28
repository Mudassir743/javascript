function staircase(n) {
  for (let i = 0; i < n; i++) {
    let star = "";
    for (let j = 0; j < n - i; j++) {
      star += " ";
      // console.log(star);
    }
    for (let k = 0; k <= i; k++) {
      star += "* ";
    }
    console.log("STAR", star, star.length);
  }
}
staircase(6);
