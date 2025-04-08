// Coding Problem: Student Grade Tracker
// Problem Statement
// Create a simple student grade tracker system using JavaScript. The system should store student records and allow you to calculate their average grades.
// Each student should be represented as an object with the following properties:
// 	•	name (string)
// 	•	grades (array of numbers)
// Your task is to implement the following functions:
// Add a student:
// A function addStudent(students, student) that takes an array students and a student object and adds the student to the array.
// Add a grade to a student:
// A function addGrade(students, studentName, grade) that finds a student by name and adds a grade to their grades array.
// Calculate average grade:
// A function getAverageGrade(students, studentName) that returns the average grade of a student, or null if the student is not found.
// Example Usage
// const students = [];
// addStudent(students, { name: "Alice", grades: [] });
// addStudent(students, { name: "Bob", grades: [] });
// addGrade(students, "Alice", 90);
// addGrade(students, "Alice", 85);
// addGrade(students, "Bob", 78);
// console.log(getAverageGrade(students, "Alice"));
// // Expected: 87.5
// console.log(getAverageGrade(students, "Bob"));
// // Expected: 78
// ⸻
// Guideline to Approach the Problem
// Understand the Data Structure:
// 	•	Each student is an object.
// 	•	Grades are stored in an array within the student object.
// 	•	All students are stored in a single students array.
// Functions to Write:
// 	•	addStudent: Use .push() to add the student object.
// 	•	addGrade: Use .find() to locate the student, then .push() the grade to their grades array.
// 	•	getAverageGrade: Use .find() to locate the student and calculate the average using a loop or .reduce().
// Test With Edge Cases:
// 	•	Try to get the average for a student that doesn’t exist.
// 	•	Add a grade to a student before adding them (should ideally handle this case or show an error).
// ⸻
//  (edited)

let student = { name: "Alice", grades: [] };
let student1 = { name: "Bob", grades: [] };
const students = [];

function addStudent(students, student) {
  students.push(student, student1);

  console.log(students);
}
addStudent(students, student, student1);

function addGrade(students, studentName, grade) {
  let student =
    students.find((student) => student.name === studentName) || 

  if (student) {
    student.grades.push(grade);
  } else {
    console.log("Student Not Found");
  }
}

addGrade(students, "Ali", 90);
addGrade(students, "Alice", 80);
addGrade(students, "Bob", 94);

console.log(students);
