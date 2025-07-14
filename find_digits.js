// function findDigits(n) {
//   let find_count = 0;
//   let string = n.toString();
//   //   console.log(string);
//   for (let i = 0; i < string.length; i++) {
//     let check_num = parseInt(string[i]);
//     // console.log(check_num);
//     if (check_num !== 0 && n % check_num === 0) {
//       find_count++;
//     }
//   }
//   return find_count;
// }
// console.log(findDigits(12345));
function findDigits(n) {
  let find_count = 0;
  let string = n.toString();
  for (let i = 0; i < string.length; i++) {
    let check_num = parseInt(string[i]);
    if (check_num !== 0 && n % check_num === 0) {
      find_count++;
    }
  }
  return find_count;
}
console.log(findDigits(12345));

let str = ["12345"];
let count = 0;
for (let i = 0; i < str.length; i++) {
  let check = Number(str[i]);
  if (check !== 0 && str % check === 0) count++;
}
console.log(count);
