import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fields = await readDatabase(process.argv[2]);
      const logs = [];

      for (const key of Object.keys(fields).sort()) {
        if (key) {
          logs.push(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        }
      }
      response.send(`This is the list of our students\n${logs.join('\n')}`);
    } catch (error) {
      console.log(error);
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    if (request.params.major !== 'CS' && request.params.major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fields = await readDatabase(process.argv[2]);

      response.send(`List: ${fields[request.params.major].join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
