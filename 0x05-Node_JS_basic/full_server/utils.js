import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      // Split csv into lines
      const lines = data.split('\n');
      const fields = {};

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
      });

      resolve(fields);
    });
  });
}

export default readDatabase;
