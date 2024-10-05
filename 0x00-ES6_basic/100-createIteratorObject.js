export default function createIteratorObject(report) {
  const employeeObject = report.allEmployees;
  const employees = [];

  for (const key in employeeObject) {
    if (key) {
      employees.push(...employeeObject[key]);
    }
  }

  const iteratorObject = {
    data: employees,
    [Symbol.iterator]() {
      let idx = 0;
      const self = this;
      return {
        next() {
          if (idx < self.data.length) {
            idx += 1;
            return { value: self.data[idx], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };

  return iteratorObject;
}
