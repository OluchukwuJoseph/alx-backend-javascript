export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsAtLocation = students.filter((student) => student.location === city);

  const studentsWithGrade = studentsAtLocation.map((student) => {
    const newStudent = student;
    for (const grade of newGrade) {
      if (newStudent.id === grade.studentId) {
        newStudent.grade = grade.grade;
      }
    }
    if (!newStudent.grade) newStudent.grade = 'N/A';

    return newStudent;
  });

  return studentsWithGrade;
}
