let bill = [3, 10, 2, 9];
let k = 1;
let b = 12;

function bonAppetit(bill, k, b) {
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      sum += bill[i];
    }
    console.log(sum);
  }
  let ana_share = sum / 2;
  // console.log(ana_share);
  if (b === ana_share) {
    console.log("BON APPETIT");
  } else if (console.log(b - ana_share));
}
bonAppetit([3, 10, 2, 9], 1, 12);
