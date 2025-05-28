function getTotalX(a, b) {
  let count = 0;
  for (let x = Math.max(...a); x <= Math.min(...b); x++) {
    let conditionA = true;
    let conditionB = true;

    for (let i = 0; i < a.length; i++) {
      if (x % a[i] !== 0) {
        conditionA = false;
        break;
      }
    }
    for (let j = 0; j < b.length; j++) {
      if (b[j] % x !== 0) {
        conditionB = false;
        break;
      }
    }
    if (conditionA && conditionB) {
      count++;
    }
  }
  return count++;
}
console.log(getTotalX([2, 4], [16, 32, 96]));
function get_Total(a, b) {
  let count = 0;
  for (let x = Math.max(...a); x <= Math.min(...b); x++) {
    let conditionA = true;
    let conditionB = true;

    for (let i = 0; i < a.length; i++) {
      if (x % a[i] !== 0) {
        conditionA = false;
        break;
      }
    }
    for (let j = 0; j < b.length; j++) {
      if (b[j] % x !== 0) {
        conditionB = false;
        break;
      }
    }
    if (conditionA && conditionB) {
      count++;
    }
  }
  return count;
}
console.log(get_Total([2, 4], [16, 32, 96]));

let array = [2, 4, 16, 32, 96];
for (let i = 0; i < array.length; i++) {
  console.log(array[i] * array[i]);
}
console.log(array);
