// Simple server
const { createServer } = require('http');

// Define the server logic
const app = createServer((req, res) => {
  // Set the response header
  res.writeHeader(200, { 'Content-Type': 'text/plain' });
  // Write the response body
  res.write('Hello Holberton School!');
  // End the response
  res.end();
});

const PORT = 1245;

// start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
