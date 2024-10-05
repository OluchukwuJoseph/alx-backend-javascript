export default function createIteratorObject(report) {
  const employeeObject = report.allEmployees;
  let employees = [];

  for (let key in employeeObject) {
    employees.push(...employeeObject[key]);
  }

  const iteratorObject = {
    data: employees,
    [Symbol.iterator]() {
      let idx = 0;
      const self = this;
      return {
        next() {
          if (idx < self.data.length) {
            return {value: self.data[idx++], done: false}
          } else {
            return {value: undefined, done: true}
          }
        }
      }
    }
  };

  return iteratorObject;
}
