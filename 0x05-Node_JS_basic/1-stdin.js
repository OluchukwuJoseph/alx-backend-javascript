// Ver important software

// Write Welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Listen for user input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
});
// Write shutdown message
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
