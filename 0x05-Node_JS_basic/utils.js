/**
 * Captures console logs from a function execution while temporarily overriding console.log
 *
 * @param {Function} fn - The function whose console logs will be captured
 * @param {*} args - Arguments to be passed to the function
 * @returns {Promise<string[]>} An array of captured log messages
 */
async function captureConsoleLogs(fn, args) {
  // Initialize an empty array to store captured logs
  let logs = [];

  // Store the original console.log method to restore later
  const originalLog = console.log;

  // Override console.log to capture logs in the 'logs' array
  // Instead of printing to console, it stores the log messages as strings
  console.log = (...args) => {
    // Join the arguments into a single string and add to logs array
    logs.push(args.join(''));
  };

  try {
    // Await the execution of the provided function
    await fn(args)
      // Regardless of success or failure, restore the original console.log
      .finally(() => {
        console.log = originalLog;
      });
  } catch (error) {
    // If an error occurs during function execution
    // Reset logs and add an error message
    logs = [];
    logs.push('Cannot load the database');
  }

  return logs;
}

module.exports = captureConsoleLogs;
