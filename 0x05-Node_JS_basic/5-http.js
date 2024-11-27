// A more complex HTTP server
const { createServer } = require('http');
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

const app = createServer(async (req, res) => {
  // Set the response header
  res.writeHeader(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const capturedLogs = await captureConsoleLogs(() => countStudents('database.csv'));
      res.write('This is the list of our students\n');
      res.write(capturedLogs.join('\n'));
    } catch (error) {
      res.status(500).send('Error processing students');
    }
  }
  // End the response
  res.end();
});

PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;