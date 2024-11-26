#!/usr/bin/env node

const http = require('http');
const fs = require('fs').promises;
const url = require('url');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).map((line) => line.split(','));

    const totalStudents = students.length;

    const fields = {};
    for (const student of students) {
      const [firstname, , , field] = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    let result = `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const { query } = parsedUrl;

    if (!query.db) {
      res.statusCode = 400;
      res.end('Database file is missing!');
      return;
    }

    try {
      const studentsInfo = await countStudents(query.db);
      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (err) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
module.exports = app;
