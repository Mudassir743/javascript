function minimumNumber(n, password) {
  let password_digits = 0;
  let password_lower_case = 0;
  let password_upper_case = 0;
  let password_special_case = 0;

  let = numbers = "0123456789";
  let = lower_case = "abcdefghijklmnopqrstuvwxyz";
  let = upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let = special_characters = "!@#$%^&*()-+";

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (numbers.includes(char)) console.log("yes");
  }
  //   console.log(password_digits);
}
console.log(minimumNumber(6, "#HackerRank"));
