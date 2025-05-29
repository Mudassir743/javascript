function angryProfessor(k, a) {
  let student_count = 0;
  for (let i = 0; i < a.length; i++) if (a[i] <= 0) student_count++;
  if (student_count < k) return "YES";
  else if (student_count >= k) return "NO";
}
console.log(angryProfessor(3, [-1, -3, -4, -3, 4, 2]));
