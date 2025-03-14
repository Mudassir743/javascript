let grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++)
    if (5 - (grades[i] % 5) < 3 && grades[i] >= 38)
      grades[i] += 5 - (grades[i] % 5);
  return grades;
}

console.log(gradingStudents(grades));
