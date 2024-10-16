//let number = 9

// if (number>=40){
//     console .log("you are best")
// } else if (number>=30){
//     console.log("you are good ")
// }else if (number>=25) {
//     console.log("you are ok ")
// }else {(number >=10)
//     console.log("you are not good ")
// };

// // let rule = "moderator";

// // switch (rule) {
// //   case "guest":
// //     console.log("guest user");
// //     break;

// //   case "moderator":
// //     console.log("Moderator User ");
// //     break;

// //   default:
// //     console.log("Unknown User");
// // }

// // let role = "";

// // if (role === "guest") console.log("hamara jani guest hai");
// // else console.log("hamara jani unknown hai");

// // =====================TERNARY OPERATOR=================

// // let banda = "gut";

// // banda === "guest"
// //   ? console.log("jani guest hai bhai")
// //   : console.log("jani pata nahi kon hia");

// // +==================== for loop ====================+

// // loops start ===========*
// // for loops:
// // while loops:
// // do whileloop:
// // for in loops:
// // for of loops:
// // there are loops//-----------

// // for loops;
// // initialExpression = i ;

// for (let i = 0; i < 5; i++) {
//   console.log("Ali", i);
// }

// // let start = 50;
// // let end = 70;
// // for (let i = start; i <= end; i += 5) {
// //   console.log(i);

// // }

// console.log(4 % 5);

// while loops;

// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// do while loops;

// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   ++i;
// } while (i <= 5);

// for in loops

// const person = {
//   name: "mudassir",
//   age: 19,
//   email: "mudassirahmed925@",
//   contact: 923068745216,
//   address: "karachi",
// };

// for (let property in person) {
//   console.log(property, person[property]);
// }

//  object[property] = obj ki property ki value
//  property = object ki property aye gi (not value)

// const colors = ["red", "blue", "yellow "];

// for (let print in colors) console.log(print, colors[print]);

// for of loops;

// const colors = ["red", "blue", "yellow"];

// for (let color of colors) {
//   console.log("COLORS ==> ", colors);
//   console.log("COLOR ==> ", color);
// }
// break and continue//////
// let i = 0;
// while (i <= 10) {
//   // if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// /max of tow number;------

// let number = max(8, 5);

// console.log(number);
// function max(a, b) {
//   return a > b ? a : b;
// }

// landscae or portrait

// function sum(width, height) {
//   return width > height;
// }
// console.log(sum(400, 100));

// function sum(a, b) {
//   console.log(a+ b);
// }
// sum(2, 4);

// speed limit = 70

// checkspeed = 70;

// function checkspeed(speed) {
// }  const speedlimit = 70;

//   if (speed < speedlimit) {
//     console.log("ok");
//   }

// fizzBuzz//

// console.log(fizzBuzz(3));

// function fizzBuzz(input) {
// logic
// agr to 3 se divisible ha === fizz
// agr to 5 se divisible ha === buzz
// agr to 5 se or 3 se bhi divisible ha === fizzBuzz
// agr dono se nahi to wohi number wapis return
// agr wioh number hi nahi hai to return "NOT A NUMBER"

// console.log(fizzBuzz(8));

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "not a number";

//   if (input % 5 == 0 && input % 3 == 0) return "FIzzbuzz";

//   if (input % 3 == 0) return "fizz";

//   if (input % 5 == 0) return "buzz";

//   return input;
// }

// demerit point//

// checkspeed wala ..

// speedlimit= 70
// speed 5->1 point
// math.floor (1.3)
// 12 point->  license suspended;

// checkSpeed(70);
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   if (speed < speedLimit + kmPerPoint) console.log("OK");
//   else {
//   }

//   const point = Math.floor((speed - speedLimit) / kmPerPoint);
//   {
//     if (point >= 12) {
//       console.log("license suspended");
//     } else {
//       console.log("Point", point);
//     }
//   }
// }

// even and odd number//_ _ _.

// showNumber(10);

// function showNumber(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log("EVEN", i);
//     else console.log("ODD", i);
//   }
// }

// if n alse alse if//

// grading(49);

// function grading(percentage) {
//   if (percentage >= 90) {
//     console.log("you are A++ grade ");
//   } else if (percentage >= 80) {
//     console.log("you are A+ grade ");
//   } else if (percentage >= 70) {
//     console.log("you are A grade ");
//   } else if (percentage >= 60) {
//     console.log("you are B grade");
//   } else if (percentage >= 50) {
//     console.log("you are C grade");
//   } else console.log("you are fail");
// }

// count truthy//

// const array = [null, undefined, NaN, false];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// {
//   const array = [5, 4, null, undefined, false, , , ,];
//   console.log(countTurethy(array));
// }
// function countTurethy(array) {
//   let count = 0;

//   for (let value of array) if (value) count++;
//   return count;
// }

//  Object String

// const movie = {
//   tittle: "A",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "B",
// };

// showProperties(movie);
// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log("THIS IS A STRING VALUE ==> ", obj[key]);
//     } else if (typeof obj[key] === "number") {
//       console.log("THIS IS A NUMBER VALUE ==> ", obj[key]);
//     }
//   }

//   // console.log(key, obj[key], typeof obj[key]);
// // }

// const person1 = {
//   named: "mudasir",
//   age: 19,
//   phone: 923068745216,
//   address: "karachi",
// };

// const person2 = {
//   named: "mudasir",
//   age: 19,
//   phone: 923068745216,
//   address: "karachi",
// };

// const name = "mobin";
// const name1 = "mobin";
// console.log(name == name1);

// showProperties(person);
// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log("THIS IS VALUE OF STRING ===>", obj[key]);
//     } else if (typeof obj[key] === "number") {
//       console.log("THIS IS VALUE OF NUMBER ===>", obj[key]);
//     }
//   }
// }

// sum of multiple
// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0);
//     sum += i;
//   }
//   return sum;
// }
// console.log(sum(10));

// 50 - 59 = F
// 60 - 69 = D
// 70 - 79 = C
// 80 - 89 = B
// 90 - 100= A

// let marks = [80];

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   const average = calculatAverage(marks);
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
//   function calculatAverage(array) {
//     let sum = 0;
//     for (let marks of array) sum += marks;
//     return sum / array.length;
//   }
// }

//<<STAR WALA >>

// showStar(10);

// function showStar(rows) {
//   for (let row = 1; row <= rows; ++row) {
//     let pettern = "";
//     for (let i = 1; i <= row; ++i) {
//       pettern += "! ";
//     }
//     console.log(pettern);
//   }
// }

//prime number ---

// showPrime(11);

// function showPrime(limit) {
//   for (let number = 2; number < limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }

//BASICS >>.

// let radius = 1;
// let x = 1;
// let y = 1;

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };
// circle.draw();

// factory function

// function creatCircle(radius, color) {
//   return {
//     radius,
//     color,
//     draw() {
//       console.log("draw");
//     },
//     diameter: radius * 2,
//     area: 6.28 * radius, // Area = formula: 2 * pie * radius
//   };
// }

// const circle1 = creatCircle(1, "green");
// console.log(circle1);

// const circle2 = creatCircle(2, "blue");
// console.log(circle2);

// const circle3 = creatCircle(3, "red");
// console.log(circle3);

// ===================== ASAL me ye hai ===================== //
// let circle1 = {
//   radius: 1,
//   color: "green",
//   draw() {
//     console.log("draw");
//   },
// };

// let circle2 = {
//   radius: 1,
//   color: "blue",
//   draw() {
//     console.log("draw");
//   },
// };

// let circle3 = {
//   radius: 1,
//   color: "red",
//   draw() {
//     console.log("draw");
//   },
// };
// ......,,,,,,,,,END/////

//camel notation : oneTwoThreeFour. jis k bad har word ka first leter capital hooo;

//pascal notation : OneTwoThreeFour. jis k har word ka first leter capital hoo;

//\ repository banali

//========constructor function========//

//
//+++====   ===≠≠≠≠≠≠≠z===s===s--

//=======dynamic nature of object========//.

// let circle = {
//   radius: 1,
// };
// circle.game = "pubg";
// circle.color = "blue  yellow black";
// circle.draw = function () {};
// circle.name = "mudassir ";
// // delete circle.color;
// // delete circle.radius;
// // delete circle.draw;
// console.log(circle);

//======constructor property======//

// new String(); //"",'',``:
// new Boolean(); // true ,false :
// new Number(); //1,2,3,4,,,,,,

//=====value v/s refrance ======//

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);

console.log(obj);
