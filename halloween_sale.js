// // function howManyGames(p, d, m, s) {
// //   // Return the number of games you can buy

// //   let game_count = 0;
// //   let price = p;
// //   for ( let  )

// //   }
// // }
// // howManyGames(20, 3, 6, 80);

// // p = 20
// // d = 3
// // m = 6
// // s = 70

// function howManyGames(p, d, m, s) {
//   let priceCount = 1;
//   let newGame = 0;
//   let costArray = [p];
//   let calculatedCost = 0;
//   for (let i = 1; i <= m; i++) {
//     newGame = p - d;
//     p = newGame;
//     priceCount++;
//     costArray.push(p); // 20 17 14 11 8

//     if (p <= m) {
//       costArray.pop();
//       priceCount--;
//     }
//   }
//   let baqayaPese = 0;
//   calculatedCost = s - costArray.reduce((a, b) => a + b); //30
//   for (let i = 0; i < calculatedCost; i++) {
//     baqayaPese = calculatedCost - m;
//     priceCount++;
//     calculatedCost = baqayaPese;
//   }
//   console.log(
//     "p",
//     p,
//     "pricecount",
//     priceCount,
//     "costArray",
//     costArray,
//     "newGame",
//     newGame,
//     "calculated Cost = ",
//     calculatedCost
//   );
// }

// console.log(howManyGames(20, 3, 6, 100));
function howManyGames(p, d, m, s) {
  let gamesBought = 0;
  let currentPrice = p;

  while (s >= currentPrice) {
    s -= currentPrice;
    gamesBought++;

    if (currentPrice - d > m) {
      currentPrice -= d;
    } else {
      currentPrice = m;
    }
  }

  return gamesBought;
}

console.log(howManyGames(20, 3, 6, 100));
