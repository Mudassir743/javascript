function kangaroo(x1, v1, x2, v2) {
  for (let i = 1; i < 20; i++) {
    let post1 = x1 + i * v1;
    let post2 = x2 + i * v2;

    if (post1 === post2) {
      return "YES";
    }
  }
  return "NO ";
}
console.log(kangaroo(1, 3, 6, 2));

function print_Star(n, m) {
  for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= m; j++) {
      if (i == 1 || j == 1 || i == n || j == m) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}
print_Star(5, 5);
