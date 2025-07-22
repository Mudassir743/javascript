function lonelyinteger(a) {
  //   let freq = {};
  //   for (let i = 0; i < a.length; i++) {
  //     let each = a[i];
  //     if (freq[each]) {
  //       freq[each] = freq[each] + 1;
  //     } else freq[each] = 1;
  //     console.log(a[i]);
  //   }

  //   for (key in freq) {
  //     if (freq[key] === 1) return key;
  //   }

  for (let i = 0; i < a.length; i++)
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) return a[i];
  return 0;
}

console.log(lonelyinteger([4, 9, 95, 93, 57, 4, 57, 93, 9]));
