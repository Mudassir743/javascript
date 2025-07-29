function minimumNumber(n, password) {
  let digets = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  if (password.length < n) {
    return n - password.length;
  }
  let count_1 = 0;
  let count_2 = 0;
  let count_3 = 0;
  let count_4 = 0;
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (digets.includes(char)) count_1 = 1;
    if (lower_case.includes(char)) count_2 = 1;
    if (upper_case.includes(char)) count_3 = 1;
    if (special_characters.includes(char)) count_4 = 1;
  }
  let count = count_1 + count_2 + count_3 + count_4;
  // console.log(count);
  if (count == 4 && password.length >= n) return 0;
  else if (count == 3 && password.length >= n) return 1;
  else if (count == 2 && password.length >= n) return 2;
  else if (count == 1 && password.length >= n) return 3;
}
console.log(minimumNumber(6, "Ab1"));
console.log(minimumNumber(6, "#HackerRank1"));

// function minimumNumber(n, password) {
//   // Return the minimum number of characters to make the password strong
//   let password_digits = 0;
//   let password_lower_case = 0;
//   let password_upper_case = 0;
//   let password_special_case = 0;

//   let digets = "0123456789";
//   let lower_case = "abcdefghijklmnopqrstuvwxyz";
//   let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let special_characters = "!@#$%^&*()-+";
//   if (password.length < n) {
//     console.log("password length and n", { password: password.length, n });
//     return n - password.length;
//   }
//   for (let i = 0; i < password.length; i++) {
//     console.log("running i loop");

//     let char = password[i];
//     if (digets.includes(char)) password_digits = 1;
//     if (lower_case.includes(char)) password_lower_case = 1;
//     if (upper_case.includes(char)) password_upper_case = 1;
//     if (special_characters.includes(char)) password_special_case = 1;
//   }
//   let total_type =
//     password_digits +
//     password_lower_case +
//     password_upper_case +
//     password_special_case;
//   if (total_type == 4 && password.length >= n) {
//     return 0;
//   } else if (total_type == 3 && password.length >= n) return 1;
//   else if (total_type == 2 && password.length >= n) return 2;
//   else if (total_type == 1 && password.length >= n) return 3;
// }

// console.log(minimumNumber(6, "Ab1"));
