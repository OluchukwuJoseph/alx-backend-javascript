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

captureConsoleLogs(() => countStudents('database.csv'))
  .then(capturedLogs => {
    console.log('Captured Logs:', capturedLogs);
  })