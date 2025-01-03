// console.log(y);
// let x = 10;

// // let x = 5;
// x += 3;
// console.log(x);

// let x = 1;
// let y = x > 5 && x < 15;
// let y = x !== 2;
// console.log(y);

// //IF...ELSE //

// let hour = 13;
//   console.log("GOOD MORNING");
// } else if (hour >= 12 && hour < 18) {
//   console.log("GOOD AFTERNOON");
// } else console.log("GOOD EVENING");

// //  function====== first time =======//
// function greet(name, lastNmae) {
//   console.log("hello  " + name + " " + lastNmae);
// }
// greet("ahmed ", 'mudassir"');
// greet("MUDASSIR ", "AHMED");

// function square(number) {
//   return number * number;
// }
// let number = square(10);
// if (hour >= 6 && hour < 12) {
// // console.log(number);
// //
// let a = "red";
// let b = "blue";
// a = b;
// b = c;

// console.log(a);
// console.log(b);

//LOOPS AGAIN///============for loop is good buddy.//////////if (i % 2 !== 0)//////// even odd code
// let c = a;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// // // while loop
// let i = 0;
// while (i <= 10) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// // DO WHILE LOOP
// let i = 35;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

//FOR IN LOOP =======//

// const person = {
//   name: "ali",
//   age: 20,
// };
// for (key in person) {
//   console.log(key, person[key]);
// }

// const colors = [" blue", "green", "red"];

// for (let index in colors) {
//   console.log(index, colors[index]);

// }
// //=====FOR OF LOOP=======
// const colors = ["blue", "green", "red"];

// for (let color of colors) {
//   console.log(color);
// }

// // BREAK AND CONTINUE LOOP //======
// let i = 0;
// while (i <= 10) {
//   //if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// //EXERCISE MAX NUMBER ///
// function max(a, b) {
//   if (a > b) return a;
//   return b;
// }
// // console.log(max(34, 5));
// function landscap(width, height) {
//   return width > height;
// }
// console.log(landscap(10, 20));

//==========FizzBuzz==========//

// function fizzBuzz(input) {
// logic
// agr to 3 se divisible ha === fizz
// agr to 5 se divisible ha === buzz
// agr to 5 se or 3 se bhi divisible ha === fizzBuzz
// agr dono se nahi to wohi number wapis return
// agr wioh number hi nahi hai to return "NOT A NUMBER"

// function fizzBuzz(input) {
//   if (typeof input !== "number") return " not a number ";
//   if (input % 5 === 0 && input % 3 === 0) return "fizzBuzz";
//   if (input % 3 === 0) return "fizz";
//   if (input % 5 === 0) return " Buzz";
//   else return input;
// }
// console.log(fizzBuzz("fahad bhai"));
//========== demerit popint==========//
// speedlimit= 70
// speed 5->1 point
// math.floor (1.3)
// // 12 point->  license suspended;
// function checkSpeed(speed) {
//   const speedlimit = 70;
//   const kmperPoint = 5;
//   if (speed <= speedlimit) console.log("ok");
//   else {
//     const point = Math.floor((speed - speedlimit) / kmperPoint);
//     if (point >= 12) console.log("license suspended");
//     else console.log("points", point);
//   }
// }
// checkSpeed(80);

// function checkSpeed(speed) {
//   const speedlimit = 70;
//   const kmperPoint = 5;
//   if (speed <= speedlimit) console.log("ok");
//   else {
//     const point = Math.floor((speed - speedlimit) / kmperPoint);
//     if (point >= 12) console.log(" license suspended");
//     else console.log("points", point);
//   }
// }
// checkSpeed(113);

// //============ even and odd ============//

// showNumber(100);
// function showNumber(limit) {
//   for (let i = 0; i <= limit; i++) {
//     //if (i % 2 === 0) console.log(i, "EVEN");
//     //else console.log(i, "ODD");
//     //
//     const message = i % 2 === 0 ? "EVEN " : " ODD";
//     console.log(i, message);
//   }
// //}
// const array = [null, "hello ", 0];
// console.log(countTruthy(array));
// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }
//≈≈≈≈≈≈≈≈≈≈≈string properties≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

// const movie = {
//   title: "ram page",
//   releaseYear: 2020,
//   rating: 4.5,
//   director: " jake ",
// };
// function showProperties(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(" THIS IS A STRING ", obj[key]);
//     } else if (typeof obj[key] === "number") {
//       console.log(" THIS IS A NUMBER  ", obj[key]);
//     }
//   }
// }
//showProperties(movie);

//  ≈≈≈≈≈≈≈≈≈≈≈≈sum of multiples ≈≈≈≈≈≈≈≈≈≈≈≈

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sum(10));

// 50 - 59 = F
// 60 - 69 = D
// 70 - 79 = C
// 80 - 89 = B
// 90 - 100= A

// const marks = [6];
// console.log(calculateGrade(marks));
// function calculateGrade(marks) {
//   let average = calculatAverage(marks);
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }
// function calculatAverage(array) {
//   let sum = 0;
//   for (let value of array) sum += value;
//   return sum / array.length;
// }

// showStar();
// function showStar(row) {
//   for (let row = 10; row >= 1; row--) {
//     let star = "  ";
//     for (let summ = 0; summ < row; summ++) star += "8";
//     console.log(star);
//   }
// }

// showStar(10);
// function showStar(row) {
//   for (let row = 0; row < 10; row++) {
//     let pattern = "";
//     for (let num = 0; num <= row; num++) pattern += " *";
//     console.log(pattern);
//   }
// }

//  ================================ prime function ================================

// showPrime(20);
// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++) {
//     if (isPrime(number)) console.log(number);
//   }
// }
// function isPrime(number) {
//   for (let factor = 2; factor <
//     number; factor++) {
//     if (number % factor === 0) return false;
//   }
//   return true;
// }

// showPrime(20);
// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++) {
//     if (number % factor === 0) return false;
//   }
//   return true;
// }
//  function ishowPrime( number ){
//    for (let )
// //  }
// showPrime(20);
// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++) {
//     if (isPrime(number)) console.log(number);
//   }
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++) {
//     if (number % factor === 0) return false;
//   }
// // return true;
// // }
// showPrime(10);
// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++) {
//     if (isPrime(number)) console.log(number);
//   }
// }
// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++) {
//     if (number % factor === 0) return false;
//   }
//   return true;
// }
// ========≠≠≠≠≠≠≠=============  prime number ================≠≠≠≠===========

// =============================== basic of factory function ========================
//  object= oriented programming( OOP )_______----------===

// let circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log(this.isVisible);
//   },
// };
// circle.draw();

//  ++++++++=================factory function ++++++++=================
// function creatCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }
// const circle1 = creatCircle(1);
// console.log(circle1);
// const circle2 = creatCircle(2);
// console.log(circle2);

//  ================exercise================== functions constructor & factory==============
// function createAddress(street, city, zipcode) {
//   return {
//     street: street,
//     city: city,
//     zipcode: zipcode,
//   };
// }
// const address1 = createAddress("39", "kashmir", "7532");
// console.log(address1);
// console.log("=======================>>>>");
// function Address(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }
// const address = new Address("29", "karachi ", "7354");
// console.log(address);
// // ======================= constructor function ========================
// function Circle(radius) {
//   this.radius = radius;
//   this.getCircumference = function () {
//     console.log("Circumference is ==> ", 2 * Math.PI * this.radius);
//   };
//   this.getDiameter = function () {
//     console.log("Diameter is ==> ", 2 * this.radius);
//   };
//   this.getRadius = function () {
//     console.log("Radius is ==> ", this.radius);
//   };
// }
// const circle1 = new Circle(5);
// const circle2 = new Circle(10);
// const circle3 = new Circle(20);
// console.log("For Circle1");
// circle1.getCircumference();
// circle1.getDiameter();
// circle1.getRadius();
// console.log("===============");
// console.log("For Circle2");
// circle2.getCircumference();
// circle2.getDiameter();
// circle2.getRadius();
// console.log("===============");
// console.log("For Circle2");
// circle3.getCircumference();
// circle3.getDiameter();
// circle3.getRadius();
// ============================================================//
// function Square(length) {
//   this.length = length;
//   this.getSquarearea = function () {
//     console.log(" Squarearea is ===>", this.length * 2);
//   };
//   this.getSquare = function () {
//     console.log(" Square is ===> ", this.length);
//   };
// }
// const square1 = new Square(100);
// const square2 = new Square(5);

// console.log("square1");
// square1.getSquarearea();
// square1.getSquare();
// console.log("===============");
// console.log("Square2");
// square2.getSquarearea();
// 0square2.getSquare();

// let circle = {
//   radiubrsbss: 1,
//   radiuvfwbsers: 1,
//   radiawfus: 1,
//   radiubes: 1,
//   radiusav: 1,
//   radiues: 1,
//   rvbaebpwadius: 1,
// };
// console.log(circle);

// circle = {};
// console.log(circle);

// function Student(name, last, age, clas) {
//   this.firstName = name;
//   this.lastName = last;
//   this.age = age;
//   this.clas = clas;
// }
// const student1 = new Student(" mudassir ", " ahmed", 19, 12);
// console.log(student1);
// const student2 = new Student(" asim ", " madni", 17, 11);
// console.log(student2);
// const student3 = new Student(" hassan  ", " ali", 20, 10);
// console.log(student3);
// =====================================================>>>>

// ===================dynamic nature of Object====================//

// let circle = {
//   radius: 1,
// };
// circle.color = " yellow";
// circle.name = "gola";
// delete circle.name;
// console.log(circle);

// ====================enumerating properties of an Object=====================

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };
// for (let key in circle) console.log(key, circle[key]);

// for (let key of Object.keys(circle)) console.log(key, circle[key]);

// for (let key of Object.entries(circle)) console.log(key);

// if ("radius" in circle) console.log("yes");

// =============== cloning an object =================

// const person = {
//   name: "mudassir",
//   age: 19,
//   city: " karachi ",
//   gender: "men",
// };
// const another = {};

// for (let key in person) another[key] = person[key]; // cloning   2 trha se hoga aik ye he //
// const another = Object.assign({ city: "karachi" }, person); cloning or aik ye he //

// const another = { ...person };

// console.log(person);

// // <====================garbage collecion======================>
// const circle = {};
// console.log(circle);
// //  <==================== String ====================>
// const message = "how are you my friend ";
// console.log(message.split(""));

// <=================template literals==================>
// Object { },
// Boolean true  false
// String ""
// // template  ``
// const name = "ALI";
// const message = `
//   Hi ${name} ${47}

//    thank you for joining my mailling list

//    regards
//    MUDASSIR,`;
// console.log(message);
// const message2 =
//   "\n  Hi muzamli,\n\n   thank you for joining my mailling list \n   \n   \n   regards\n   mudassir,";
// console.log(message2);

// <=======================exercise 1 address object=======================>
// let address = {
//   street: "A",
//   city: "B",
//   zipcode: "c",
// };
// function showAdderss() {
//   for (let key in address) console.log(key, address[key]);
// }
// showAdderss();

// <===================exercise 2 fuctory and constructor function===================>

// function showAdderss(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode,
//   };
// }
// const address1 = showAdderss("A", "B", "c");
// const address2 = showAdderss("23", "karachi", 87543);
// const address3 = showAdderss("64", "lahore", 987);

// console.log(address1);
// console.log("<=============================>");
// console.log(address2);
// console.log("<=============================>");
// console.log(address3);

// function Address(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }
// const address1 = new Address("10", "islamabad", 3874);
// const address2 = new Address("10", "lahore", 3874);
// const address3 = new Address("10", "karachi", 5676);
// console.log(address1);
// console.log("<==========================>");
// console.log(address2);
// console.log("<==========================>");
// console.log(address3);
// console.log("<==========================>");

// <========================exercise 3 object equality========================>

// function Address(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }
// const address1 = new Address("10", "islamabad", 3874);
// const address2 = new Address("10", "islamabad", 3874);
// const address3 = address1;
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));
// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipcode === address2.zipcode
//   );
// }
// function areSame(address1, address2) {
//   return address1 === address2;
// }

// function Person(name, age, clas) {
//   this.name = name;
//   this.age = age;
//   this.clas = clas;
// }
// const person1 = new Person("mudassir", 19, 12);
// const person2 = new Person("mudassir", 19, 12);
// const person3 = person1;
// function areEqual(person1, person2) {
//   return (
//     person1.name === person2.name &&
//     person1.age === person2.age &&
//     person1.clas === person2.clas
//   );
// }
// function areSame(person1, person2) {
//   return person1 === person2;
// }

// console.log(areEqual(person1, person2));
// console.log(areSame(person1, person2));
// console.log(areEqual(person3, person1));

// <=================exercise 4 blog post object===================>

// let post = {
//   litle: "A",
//   body: "B",
//   author: "C",
//   views: 10,
//   comment: [
//     { author: "A", body: "B" },
//     { author: "K", body: "M" },
//   ],
//   isLive: true,
// };
// console.log(post);

// let post = {
//   title: "ABC",
//   body: "CD",
//   author: "DF",
//   veiw: 12,
//   comment: [
//     { title: "ABC", body: "CD" },
//     { title: "ABC", body: "CD" },
//   ],
//   isLive: true,
// };
// console.log(post);

// //  ======================constructor function======================

// let post = new Post(" A", "B", "C");
// let post1 = new Post("K ", "H", "g");
// function Post(title, body, author) {
//   (this.title = title),
//     (this.body = body),
//     (this.author = author),
//     (this.view = 0);
//   this.comment = [" love you "];
//   this.live = true;
// }
// console.log(post);
// console.log("=======================");
// console.log(post1);

// =====================price range Object=====================
// let priceRange = [
//   { lable: "$", tooitios: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
//   { lable: "$$", tooitios: "Moderator", minPerPerson: 11, maxPerPerson: 20 },
//   { lable: "$$$", tooitios: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
// ];
// let rasturant = [{ averagePerPerson: 5 }];
// console.log(priceRange);

// ==================== Array ====================

// adding new element
// finding element
// removing element
// slitting arrays
// combining arrays

// <<<<<<<<<<=============adding element==============>>>>>>>>>

// const number = [3, 4];

// // END
// number.push(5, 6, 7, 8, 9, 10);
// //Beginning
// number.unshift(1, 2);
// //Middle
// number.splice(10, 0, "BAS YAHI TAK NUMBERS HAI");

// console.log(number);\

//<< ===================finding element  primitive typs==================>>

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(5));
// console.log(numbers.indexOf(1) != -1);
// console.log(numbers.includes(1));
// console.log(numbers);

// <<<===================finding element reference types===================>>>

const person = [
  { name1: "mudassir", age: 19, subject: "Math" },

  { name2: "ali", age: 15, subject: "English" },
];
console.log(person);
console.log("<<<==================>>>");

const result = person.find((name) => name.name2 === "ali");
console.log(result);

// -=========================================grade ///
// let score = 10;
// let grade = "THIS IS YOUR GRADE ";
// if (score >= 90 && score <= 100) {
//   console.log(grade, "A");
// } else if (score >= 80 && score <= 89) {
//   console.log(grade, "B");
// } else if (score >= 70 && score <= 79) {
//   console.log(grade, "C");
// } else if (score >= 60 && score <= 69) {
//   console.log(grade, "D");
// } else if (score >= 0 && score <= 59) {
//   grade, "F";
// // }
// let i = 100;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) console.log(i, "EVEN ");
//   // else console.log(i, "odd");
// }

// // g = 9.8;
// g = 8;
// console.log(g);

// array is argument ==== divided  / array.lenght === average formola=====
// marks is parameter
//total;
///////TO REPEAT///// uper side .........

//persentage /; /////// WALA/

// let number = 26;
// if (number >= 40) {
//   console.log("you are best");
// } else if (number >= 30) {
//   console.log("you are good ");
// } else if (number >= 25) {
//   console.log("you are ok ");
// } else {
//   number >= 10;
//   console.log("you are not good ");
// }

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

// // let rule = "";

// // if (rule === "guest") console.log("hamara jani gu est hai");
// // else console.log("hamara jani unknown hai");

// // =====================TERNARY OPERATOR============ =====

// // let banda = "gut";

// // banda === "guest"
// //   ? console.log("jani guest hai bhai")
// //   : console.log("jani pata nahi kon hia");

// // +==================== for loop ================== ==+

// // loops start ===========*
// // for loops:
// // while loops:
// // do whileloop:
// // for in loops:
// // for of loops:
// // there are loops//-----------

// // for loops;
// // // initialExpression = i ;

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

// const array = [null, undefined, NaN, false, 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// {
//   const array = ["hello " , null, NaN , undifine];
//   console.log(countTurethy(array));

//   function countTurethy(array) {
//     let count = 0;

//     for (let value of array) if (value) count++;
//     return count;
//   }
// }
// //  Object String

// // const movie = {
// //   tittle: "A",
// //   releaseYear: 2018,
// //   rating: 4.5,
// //   director: "B",
// // };

// // showProperties(movie);
// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log("THIS IS A STRING VALUE ==> ", obj[key]);
//     } else if (typeof obj[key] === "number") {
//       console.log("THIS IS A NUMBER VALUE ==> ", obj[key]);
//     }
//   }
// }

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
// x}
//     }
//   }

// sum of multiple
// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0);
//     sum += i;
//  x }
//   return sum;
// x}
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
//       pettern += "* ";
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

// raw");
//   },let circle2 = {
//   radius: 1,
//   color: "blue",
//   draw() {
//     console.log("d
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

// let obj = { value: 17 };

// function increase(obj) {
//   obj.value++;
// }

// increase(obj);

// console.log(obj);

// //=======================Enumerating properties of an object======================//

// let circle = {
//   radius: 1,
//   color: "red",
//   draw() {
//     console.log("draw");
//   },
// };
// for (let key in circle) {
//   console.log(key, circle[key]);
// }
// for (let key of Object.keys(circle)) {
//   console.log(key);
// }

// for (let entry of Object.entries(circle)) {
//   console.log(entry);
// }
// if ("color" in circle);
// console.log(" yes ");
