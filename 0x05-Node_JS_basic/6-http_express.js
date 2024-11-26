#!/usr/bin/env node

const express = require('express');
const app = express();

// Root route to display "Hello Holberton School!"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the app for testing or use in other modules
module.exports = app;
