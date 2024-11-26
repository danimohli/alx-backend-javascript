#!/usr/bin/env node

const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the server
module.exports = app;
