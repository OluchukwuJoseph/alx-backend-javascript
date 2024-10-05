export default function createReportObject(employeeList) {
  const reportObject = {
    allEmployees: {
      ...employeeList,
    },
    getNumberOfDepartments(employeeList) {
      let length = 0;
      for (const key in employeeList) {
        if (key) {
          length += 1;
        }
      }
      return length;
    },
  };

  return reportObject;
}
