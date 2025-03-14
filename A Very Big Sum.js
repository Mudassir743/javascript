let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let a of ar) sum += a;
  return sum;
}
console.log(aVeryBigSum(ar));
