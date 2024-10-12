export default function cleanSet(set, startString) {
  const setValues = [];

  if (!startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set) {
    if (value && value.startsWith(startString)) {
      setValues.push(value.replace(startString, ''));
    }
  }

  return setValues.join('-');
}
