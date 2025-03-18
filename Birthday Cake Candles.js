// let candles = [3, 1, 2, 3];

//   let large = 0;
// function birthdayCakeCandles(candles) {

//   const sortedCandles = candles.sort();

//   for (let i = candles.length - 1; i < candles.length; i--) {
//     if (sortedCandles[i] == Math.max(...candles)) large++;
//     else break;
//   }

//   console.log(large);
// }

// console.log(birthdayCakeCandles(candles));

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

// let sentence =
//   "afasfsafAAAAAAAghghghdasBBNBAGCVGAFGVCHJGyjhGgh32132139873421jgdjhsatyuquyudwqg";

// sentence = sentence.toLowerCase();
// let alphabet = {};
// let numbers = {};
// for (let key in sentence) {
//   let eachItem = sentence[key];
//   if (isNaN(eachItem)) {
//     if ((alphabet[eachItem] = alphabet[eachItem] + 1)) {
//     } else {
//       alphabet[eachItem] = 1;
//     }
//     // console.log([eachItem], alphabet);
//   } else {
//     if (numbers[eachItem]) {
//       numbers[eachItem] = numbers[eachItem] + 1;
//     } else {
//       numbers[eachItem] = 1;
//     }
//     // console.log([eachItem], numbers);
//   }
// }

// console.log(alphabet, numbers);

// console.log(arr.indexOf(k));

// let arr = [1, 2, 3, 4, 6, 91, 10];
// let k = 10;
// let index = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === k) {
//     index = i;
//     break;
//   }
// }
// console.log(index);

// let arr = [1, 2, 3, 4, 6, 91, 10];
// let k = 4;
// let index = -1;
// let result = [];
// for (let i = arr.length - 1; i < arr.length; i--) {
//   if (arr[i] === k) {
//     index = [i];
//     break;
//   }
//   result.push(arr[i]);
// }

// console.log(index, result);

// let arr = [12, 32, 34, 5, 66, 78, 23, 14, 78];
// let even = 0;
// let odd = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     even++;
//     console.log("EVEN", arr[i]);
//   } else {
//     odd++;
//     console.log("ODD", arr[i]);
//   }
//   console.log("EVEN==>>", even, "ODD==>>", odd);
// }

// let arr = [1, 5, 10, 2, 7, 9, 3, 6, 5, 8, 7];
// let k = 12;
// let Term1 = 0;
// let Term2 = 0;
// let Term3 = 0;
// let totalSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = [i + 1]; j < arr.length; j++) {
//     for (let n = [j + 1]; n < arr.length; n++) {
//       if (arr[i] + arr[j] + arr[n] === k) {
//         Term1 = arr[i];
//         Term2 = arr[j];
//         Term3 = arr[n];
//         console.log(arr[i] + " + " + arr[j] + " + " + arr[n]);
//         totalSum = Term1 + Term2 + Term3;
//         break;
//       }
//     }
//   }
// }

// console.log(
//   "Term1==>",
//   Term1,
//   "Term2==>",
//   Term2,
//   "Term3==>",
//   Term3,
//   "TotalSum==>",
//   totalSum
// );
// Tasks:
// Create a function getAverageScore(student) that takes a student object and returns their average score.
// Create a function getStudentsByGrade(students, grade) that returns an array of students in a specific grade.
// Create a function getStudentsByActivity(students, activity) that returns an array of students who participate in a specific activity.
// Create a function getTopPerformer(students) that returns the student with the highest average score.
// Create a function addActivity(students, studentId, newActivity) that adds a new activity to a specific student and returns the updated array. Make sure not to add duplicate activities.
// Create a function updateScore(students, studentId, examIndex, newScore) that updates a student’s score for a specific exam and returns the updated array.
// Feel free to test your functions with the provided data and see if they work correctly!

// // <<<<<<<<<<<<<<<<========================================================================================>>>>>>>>>>>>>>>>>>

// let students = [
//   {
//     id: 1,
//     name: "Alex",
//     grade: 9,
//     scores: [85, 92, 78, 90],
//     activities: ["chess", "debate"],
//   },
//   {
//     id: 2,
//     name: "Jordan",
//     grade: 10,
//     scores: [95, 88, 92, 85],
//     activities: ["basketball", "chess"],
//   },
//   {
//     id: 3,
//     name: "Morgan",
//     grade: 9,
//     scores: [75, 82, 79, 85],
//     activities: ["debate", "art"],
//   },
//   {
//     id: 4,
//     name: "Casey",
//     grade: 11,
//     scores: [92, 90, 93, 87],
//     activities: ["basketball", "music"],
//   },
//   {
//     id: 5,
//     name: "Taylor",
//     grade: 10,
//     scores: [88, 84, 90, 90],
//     activities: ["art", "music"],
//   },
// ];

// function getAverageScore(students) {
//   for (let i = 0; i < students.length; i++) {
//     let total = 0;
//     for (let j = 0; j < students[i].scores.length; j++) {
//       total += students[i].scores[j];
//     }
//     let average = total / students[i].scores.length;
//     console.log(students[i].name + ": " + average);
//   }
// }
// getAverageScore(students);

// function getAverageScore(students) {
//   let total = 0;
//   for (let i = 0; i < students.scores.length; i++) {
//     total += students.scores[i];
//   }
//   return total / students.scores.length;
// }

// // for (let i = 0; i < students.length; i++) {
// //   console.log(students[i].name + " : " + getAverageScore(students[i]));
// // }
// console.log(getAverageScore(students[0]));
// console.log(getAverageScore(students[2]));
// console.log(getAverageScore(students[3]));
// console.log(getAverageScore(students[4]));

// <<<<<<<<<<<<<<<<========================================================================================>>>>>>>>>>>>>>>>>>

// let students = [
//   {
//     id: 1,
//     name: "Alex",
//     grade: 9,
//     scores: [85, 92, 78, 90],
//     activities: ["chess", "debate"],
//   },
//   {
//     id: 2,
//     name: "Jordan",
//     grade: 10,
//     scores: [95, 88, 92, 85],
//     activities: ["basketball", "chess"],
//   },
//   {
//     id: 3,
//     name: "Morgan",
//     grade: 9,
//     scores: [75, 82, 79, 85],
//     activities: ["debate", "art"],
//   },
//   {
//     id: 4,
//     name: "Casey",
//     grade: 11,
//     scores: [92, 90, 93, 87],
//     activities: ["basketball", "music"],
//   },
//   {
//     id: 5,
//     name: "Taylor",
//     grade: 10,
//     scores: [88, 84, 90, 90],
//     activities: ["art", "music"],
//   },
// ];

// function getStudentsByGrade(students, grade) {
//   let grades = [];

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].grade === grade) {
//       grades.push(grade);
//     }
//   }
//   console.log(grades);
// }
// getStudentsByGrade(students, 10);
// // Create a function getStudentsByGrade(students, grade) that returns an array of students in a specific grade.

// <<<<<<<<<<<<<<<<========================================================================================>>>>>>>>>>>>>>>>>>

// let students = [
//   {
//     id: 1,
//     name: "Alex",
//     grade: 9,
//     scores: [85, 92, 78, 90],
//     activities: ["chess", "debate"],
//   },
//   {
//     id: 2,
//     name: "Jordan",
//     grade: 10,
//     scores: [95, 88, 92, 85],
//     activities: ["basketball", "chess"],
//   },
//   {
//     id: 3,
//     name: "Morgan",
//     grade: 9,
//     scores: [75, 82, 79, 85],
//     activities: ["debate", "art"],
//   },
//   {
//     id: 4,
//     name: "Casey",
//     grade: 11,
//     scores: [92, 90, 93, 87],
//     activities: ["basketball", "music"],
//   },
//   {
//     id: 5,
//     name: "Taylor",
//     grade: 10,
//     scores: [88, 84, 90, 90],
//     activities: ["art", "music"],
//   },
// ];
// function getStudentsByActivity(students, activity) {
//   let specificActivities = [];
//   for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].activities.length; j++) {
//       if (students[i].activities[j] === activity) {
//         specificActivities.push(students[i]);
//       }
//     }
//   }

//   return (specificActivities);
// }
//  console.log(getStudentsByActivity(students, "art"));
// Create a function getStudentsByActivity(students, activity) that returns an array of students who participate in a specific activity.

// <<<<<<<<<<<<<<<<========================================================================================>>>>>>>>>>>>>>>>>>

let students = [
  {
    id: 1,
    name: "Alex",
    grade: 9,
    scores: [85, 92, 78, 90],
    activities: ["chess", "debate"],
  },
  {
    id: 2,
    name: "Jordan",
    grade: 10,
    scores: [95, 88, 92, 85],
    activities: ["basketball", "chess"],
  },
  {
    id: 3,
    name: "Morgan",
    grade: 9,
    scores: [75, 82, 79, 85],
    activities: ["debate", "art"],
  },
  {
    id: 4,
    name: "Casey",
    grade: 11,
    scores: [92, 90, 93, 87],
    activities: ["basketball", "music"],
  },
  {
    id: 5,
    name: "Taylor",
    grade: 10,
    scores: [88, 84, 90, 90],
    activities: ["art", "music"],
  },
];

// function getAverageScore(students) {
//   for (let i = 0; i < students.length; i++) {
//     let total = 0;
//     for (let j = 0; j < students[i].scores.length; j++) {
//       total += students[i].scores[j];
//     }
//     let average = total / students[i].scores.length;
//     console.log(students[i].name + ": " + average);
//   }
// }
// function getAverageScore(students) {
//   let total = 0;
//   for (let i = 0; i < students.scores.length; i++) {
//     total += students.scores[i];
//   }
//   return total / students.scores.length;
// }

// // for (let i = 0; i < students.length; i++) {
// //   console.log(students[i].name + " : " + getAverageScore(students[i]));
// // }
// console.log(getAverageScore(students[0]));
// console.log(getAverageScore(students[2]));
// console.log(getAverageScore(students[3]));
// console.log(getAverageScore(students[4]));
// // Create a function getAverageScore(student) that takes a student object and returns their average score.

// function getStudentsByGrade(students, grade) {
//   let grades = [];

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].grade === grade) {
//       grades.push(grade);
//     }
//   }
//   console.log(grades);
// }
// getStudentsByGrade(students, 10);
// // // Create a function getStudentsByGrade(students, grade) that returns an array of students in a specific grade.

// function getStudentsByActivity(students, activity) {
//   let specificActivities = [];
//   for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].activities.length; j++) {
//       if (students[i].activities[j] === activity) {
//         specificActivities.push(students[i]);
//       }
//     }
//   }

//   return specificActivities;
// }
// console.log(getStudentsByActivity(students, "art"));
// // Create a function getStudentsByActivity(students, activity) that returns an array of students who participate in a specific activity.

// function getTopPerformer(students) {
//   let highestStudent = 0;
//   let highestAverage = 0;
//   for (let i = 0; i < students.length; i++) {
//     let totalScore = 0;
//     let eachStudentScore = students[i].scores;
//     for (let j = 0; j < eachStudentScore.length; j++) {
//       totalScore += eachStudentScore[j];
//     }
//     let average = totalScore / eachStudentScore.length;
//     if (average > highestAverage) {
//       highestAverage = average;
//       highestStudent = students[i];
//     }
//   }
//   console.log("THIS IS HIGHEST STUDENT", highestStudent);
//   console.log("THIS IS HIGHEST AVERAGE", highestAverage);
// }
// getTopPerformer(students);

// Create a function getTopPerformer(students) that returns the student with the highest average score.

function addActivity(students, studentId, newActivity) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      let alreadyExists = 0;
      for (let j = 0; j < students[i].activities.length; j++) {
        if (students[i].activities[j] === newActivity) {
          alreadyExists++;
        }
      }
      if (alreadyExists === 0) {
        students[i].activities.push(newActivity);
      }
      break;
    }
  }
}
addActivity(students, 1, "drama");
addActivity(students, 2, "music");
addActivity(students, 3, "cricket");
addActivity(students, 4, "pubg");
addActivity(students, 5, "hoky");
console.log(students);

// Create a function addActivity(students, studentId, newActivity) that adds a new activity to a specific student and returns the updated array. Make sure not to add duplicate activities.

function updateScore(students, studentId, examIndex, newScore) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      if (examIndex >= 0 && examIndex < students[i].scores.length) {
        students[i].scores[examIndex] = newScore;
      }
      break;
    }
  }
}
console.log(students);
updateScore(students, 5, 3, 100);

// Create a function updateScore(students, studentId, examIndex, newScore) that updates a student’s score for a specific exam and returns the updated array.
