// Create a function getAverageScore(student) that takes a student object and returns their average score.
// Create a function getStudentsByGrade(students, grade) that returns an array of students in a specific grade.
// Create a function getStudentsByActivity(students, activity) that returns an array of students who participate in a specific activity.
// Create a function getTopPerformer(students) that returns the student with the highest average score.
// Create a function addActivity(students, studentId, newActivity) that adds a new activity to a specific student and returns the updated array. Make sure not to add duplicate activities.
// Create a function updateScore(students, studentId, examIndex, newScore) that updates a student’s score for a specific exam and returns the updated array.
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

function getAverageScore(students) {
  for (let i = 0; i < students.length; i++) {
    let total = 0;
    for (let j = 0; j < students[i].scores.length; j++) {
      total += students[i].scores[j];
    }
    let average = total / students[i].scores.length;
    console.log(students[i].name + ": " + average);
  }
}
getAverageScore(students);
function getStudentsByGrade(students, grade) {
  let grades = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].grade === grade) {
      grades.push(students[i]);
    }
  }
  console.log(grades);
}
getStudentsByGrade(students, 10);

function getStudentsByActivity(students, activity) {
  let specificActivities = [];
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].activities.length; j++) {
      if (students[i].activities[j] === activity) {
        specificActivities.push(students[i]);
      }
    }
  }

  return specificActivities;
}
console.log(getStudentsByActivity(students, "art"));

function getTopPerformer(students) {
  let highestStudent = 0;
  let highestAverage = 0;
  for (let i = 0; i < students.length; i++) {
    let totalScore = 0;
    let eachStudentScore = students[i].scores;
    for (let j = 0; j < eachStudentScore.length; j++) {
      totalScore += eachStudentScore[j];
    }
    let average = totalScore / eachStudentScore.length;
    if (average > highestAverage) {
      highestAverage = average;
      highestStudent = students[i];
    }
  }
  console.log("THIS IS HIGHEST STUDENT", highestStudent);
  console.log("THIS IS HIGHEST AVERAGE", highestAverage);
}
console.log(getTopPerformer(students));

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
    }
  }
  return students;
}
console.log(addActivity(students, 1, "drama"));
console.log(addActivity(students, 2, "music"));
console.log(addActivity(students, 3, "cricket"));
console.log(addActivity(students, 4, "pubg"));
console.log(addActivity(students, 5, "hoky"));

function updateScore(students, studentId, examIndex, newScore) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      if (examIndex >= 0 && examIndex < students[i].scores.length) {
        students[i].scores[examIndex] = newScore;
      }
    }
  }
  return students;
}

console.log(updateScore(students, 5, 3, 100));
