const fs = require('fs');

/**
 * Reads a database file and counts students by field.
 * @param {string} path - The path to the database file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).map((line) => line.split(','));

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fields = {};
    for (const student of students) {
      const [firstname, , , field] = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
