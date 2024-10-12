export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return [];

  return students.reduce((totalId, student) => totalId + student.id, 0);
}
