var student1 = {
    firstName: 'Joseph',
    lastName: 'Oluchukwu',
    age: 200,
    location: 'Nigeria'
};
var student2 = {
    firstName: 'Chinedu',
    lastName: 'Oluchukwu',
    age: 150,
    location: 'London'
};
var students = [student1, student2];
// render table, and for each elements in the array, append new row to the table
var table = document.createElement('table');
students.forEach(function (student) {
    var row = table.insertRow();
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    firstCell.textContent = student.firstName;
    secondCell.textContent = student.location;
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map