// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databaseFile = process.argv[2];
      const students = await readDatabase(databaseFile);

      let response = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      fields.forEach((field) => {
        const names = students[field].join(', ');
        response += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const databaseFile = process.argv[2];
      const students = await readDatabase(databaseFile);

      const studentList = students[major];
      if (!studentList) {
        return res.status(500).send('Cannot load the database');
      }

      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
