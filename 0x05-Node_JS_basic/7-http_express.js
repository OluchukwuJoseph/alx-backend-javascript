const express = require('express');
const countStudents = require('./3-read_file_async');
const captureConsoleLogs = require('./utils');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const capturedLogs = await captureConsoleLogs(countStudents, process.argv[2]);
  res.send(`This is the list of our students\n${capturedLogs.join('\n')}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
