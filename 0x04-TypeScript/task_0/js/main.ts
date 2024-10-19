// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Joseph',
  lastName: 'Oluchukwu',
  age: 200,
  location: 'Nigeria'
};

const student2: Student = {
  firstName: 'Chinedu',
  lastName: 'Oluchukwu',
  age: 150,
  location: 'London'
};

const students: Student[] = [student1, student2]

// render table, and for each elements in the array, append new row to the table
const table = document.createElement('table');

students.forEach((student) => {
  const row = table.insertRow();
  const firstCell = row.insertCell(0);
  const secondCell = row.insertCell(1);

  firstCell.textContent = student.firstName;
  secondCell.textContent = student.location;
});

document.body.appendChild(table);
