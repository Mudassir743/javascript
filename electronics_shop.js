let b = 60;
let keyboard = [40, 50, 60];
let usb_drive = [5, 8, 12];

function getMoneySpent(keyboards, drives, b) {
  let max_budget = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let total = keyboards[i] + drives[j];
      if (total <= b && total > max_budget) {
        // console.log(max_budget);
        max_budget = total;
        console.log(
          ` KEYBOARDS==> ${keyboards[i]} USB BRIVE==> ${drives[j]} TOTAL==> ${total}`
        );
      }
    }
  }
  return max_budget;
}
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
