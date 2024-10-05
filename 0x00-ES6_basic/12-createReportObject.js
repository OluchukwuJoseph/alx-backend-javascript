export default function createReportObject(employeeList) {
  const reportObject = {
    'allEmployees': {
      ...employeeList
    },
    getNumberOfDepartments(employeeList) {
      let length = 0;
      for (let key in employeeList) {
        length++;
      }
      return length;
    }
  };

  return reportObject;
}
