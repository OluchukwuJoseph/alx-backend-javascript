const { createServer } = require('http');
const countStudents = require('./3-read_file_async');
const captureConsoleLogs = require('./utils');

const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    const capturedLogs = await captureConsoleLogs(countStudents, process.argv[2]);

    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    res.write(capturedLogs.join('\n'));
  } else {
    res.writeHeader(404, { 'Content-Type': 'text/plain' });
  }
  res.end();
});

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
