const express = require('express');
const countStudents = require('./3-read_file_async');

function captureConsoleLogs(fn) {
  return new Promise((resolve, reject) => {
    const originalLog = console.log;
    const logs = [];

    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    fn()
      .then(() => {
        console.log = originalLog;
        resolve(logs);
      })
      .catch(err => {
        console.log = originalLog;
        reject(err);
      });
  });
}

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const capturedLogs = await captureConsoleLogs(() => countStudents('database.csv'));
  res.send('This is the list of our students');
  res.send(capturedLogs.join('\n'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
