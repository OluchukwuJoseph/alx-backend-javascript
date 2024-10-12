function GenerateStudent(id, firstName, location) {
  const student = {
    id,
    firstName,
    location,
  };

  return student;
}

export default function getListStudents() {
  return [
    GenerateStudent(1, 'Guillaume', 'San Francisco'),
    GenerateStudent(2, 'James', 'Columbia'),
    GenerateStudent(5, 'Serena', 'San Francisco'),
  ];
}
