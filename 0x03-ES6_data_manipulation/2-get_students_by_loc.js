export default function getStudentsByLocation(students, city) {
  const studentsAtLocation = students.filter((value) => value.location === city);

  return studentsAtLocation;
}
