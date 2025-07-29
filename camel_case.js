function camelcase(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") count++;
    // if (s[i] >= "A") if (s[i] <= "Z") count++;
  }
  console.log(count + 1);
}
console.log(camelcase("save Changes In The Editor"));
