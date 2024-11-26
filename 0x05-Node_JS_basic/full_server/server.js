// full_server/server.js

import express from 'express';
import routes from './routes/index';  // Import the routes from index.js
import { readDatabase } from './utils';

const app = express();
const PORT = 1245;

// Retrieve the database filename from command-line arguments
const databaseFile = process.argv[2]; // The second argument should be the CSV file

// Use the routes defined in routes/index.js
app.use(express.json());
app.use(routes);

// Start the server on port 1245
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
