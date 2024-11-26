const { readFileSync } = require('fs');

function countStudents(path) {
  try {
    // Read csv
    const csv = readFileSync(path, 'utf-8');
    // Split csv into lines
    const lines = csv.split('\n');
    const fields = {};
    let noStudent = 0;

    lines.forEach((line, index) => {
      // Do nothing if it's the first line or line is empty
      if (index === 0 || line === '') {
        return;
      }
      // Split line into values
      const values = line.split(',');
      if (fields[values[3]]) {
        fields[values[3]].push(values[0]);
      } else {
        fields[values[3]] = [values[0]];
      }
      noStudent += 1;
    });

    console.log(`Number of students: ${noStudent}`);
    for (const key of Object.keys(fields)) {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
