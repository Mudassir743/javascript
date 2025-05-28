// let n = 9;
// let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// function sockMerchant(n, ar) {
//   let pairs = {};
//   for (let i = 0; i < n; i++) {
//     if (ar[i] === -1) continue;
//     for (let j = i + 1; j < n; j++) {
//       if (ar[i] === ar[j]) {
//         // pairs++;
//         // ar[j] = -1;

//         console.log(pairs);
//         let color = ar[i - 1];
//         if (pairs[color]) {
//           pairs[color] = pairs[color] + 1;
//         } else {
//           pairs[color] = 1;
//         }
//         break;
//       }
//       //   if (pairs % 2 === 0 || pairs % 2 !== 0) {
//       //   }

//       //   let pairs_count = 0;
//       //   if (ar[i] === ar[j]) {
//       //     pairs_count++;
//       //     pairs_count = pairs;
//       //   }
//     }
//   }
//   return pairs;
// }

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// let numbers = [3, 1, 2, 2, 3, 1, 1];

// let candles = {};

// for (let key in numbers) {
//   let eachItem = numbers[key];
//   if (candles[eachItem]) {
//     candles[eachItem] = candles[eachItem] + 1;
//     // candles[eachItem] = 0;
//   } else {
//     candles[eachItem] = 1;
//   }

//   // console.log("eachItem", eachItem);
//   // console.log("CANDLES", candles);
// }
// console.log(candles);

function sockMerchant(n, ar) {
  let pairs_cuont = 0;
  for (let i = 0; i < n; i++) {
    if (ar[i] === -1) continue;
    for (let j = i + 1; j < n; j++) {
      if (ar[i] === ar[j]) {
        pairs_cuont++;
        ar[j] = -1;
        break;
      }
    }
  }
  return pairs_cuont;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

function count_same(arr) {
  let same = {};
  for (let i = 0; i < arr.length; i++) {
    let eachItem = arr[i];
    if (same[eachItem]) {
      same[eachItem] = same[eachItem] + 1;
      // console.log(same);
    } else {
      same[eachItem] = 1;
    }
    console.log(same, eachItem);
  }
}
count_same([10, 20, 20, 10, 10, 30, 50, 10, 20]);
