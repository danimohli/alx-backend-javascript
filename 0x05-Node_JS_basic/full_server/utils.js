// full_server/utils.js

import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }

      const students = {};
      const lines = data.trim().split('\n');
      lines.forEach((line) => {
        const [firstName, field] = line.split(',');
        if (!firstName || !field) return; // Skip invalid lines

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      });

      resolve(students);
    });
  });
};
