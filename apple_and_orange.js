let s = 5,
  t = 7;

let a = 5,
  b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    let landed = a + apples[i];
    if (landed >= s && landed <= t) {
      appleCount++;
      console.log("APPLE", appleCount);
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    let landed = b + oranges[j];
    if (landed >= s && landed <= t) {
      orangeCount++;
      console.log("ORANGE", orangeCount);
    }
  }
  console.log("APPLIE COUNT", appleCount);
  console.log("ORANGE COUNT", orangeCount);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
