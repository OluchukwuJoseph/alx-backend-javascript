export default function cleanSet(set, startString) {
  const setValues = [];

  if (!startString) {
    return '';
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      setValues.push(value.replace(startString, ''));
    }
  }

  return setValues.join('-');
}
