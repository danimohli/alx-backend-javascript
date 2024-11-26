#!/usr/bin/env node

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); // Get user input, trimmed of whitespace
  console.log(`Your name is: ${input}`);

  // Exit process
  console.log('This important software is now closing');
  process.exit();
});

// Handle program exit explicitly
process.on('SIGINT', () => {
  console.log('\nThis important software is now closing');
  process.exit();
});
