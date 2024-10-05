export default function iterateThroughObject(reportWithIterator) {
  let i = 0, string = '';

  for (let value of reportWithIterator) {
    if (i == 0) {
      string = value;
    } else {
      string = `${string} | ${value}`
    }
    i++;
  }

  return string;
}
