export default function iterateThroughObject(reportWithIterator) {
  let i = 0;
  let string = '';

  for (const value of reportWithIterator) {
    if (i === 0) {
      string = value;
    } else {
      string = `${string} | ${value}`;
    }
    i += 1;
  }

  return string;
}
