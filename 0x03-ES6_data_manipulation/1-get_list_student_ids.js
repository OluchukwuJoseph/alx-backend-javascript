export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  const studentIds = students.map((value) => value.id);

  return studentIds;
}
