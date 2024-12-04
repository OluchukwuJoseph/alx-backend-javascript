const express = require('express');
const countStudents = require('./3-read_file_async');

async function captureConsoleLogs() {
  const originalLog = console.log;
  const logs = [];

  console.log = (...args) => {
    logs.push(args.join(' '));
  };

  await countStudents('database.csv')
  console.log = originalLog;
  return logs;
}

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const capturedLogs = await captureConsoleLogs();
  res.write('This is the list of our students\n');
  res.write(capturedLogs.join('\n'));
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
