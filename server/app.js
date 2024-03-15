/*
 * Filename: server/app.js
 * Author: Pramod K Singh
 * Date: March 2024
 * Version: 1.0
 */
// Import necessary modules
const express = require('express'); // Import Express.js framework
const path = require('path'); // Import path module for file path operations

// Create an instance of Express application
const app = express();

// Import routes for scraping functionality
const scraperRoutes = require('./routes/scraperRoutes');

// Use the scraper routes for '/api' endpoint
app.use('/api', scraperRoutes);

// Serve static files (e.g., HTML, CSS, JS) from the client/build directory
app.use(express.static(path.join(__dirname, '../client/build')));

// For any other routes, serve the React application's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Define the port number to listen on
const PORT = process.env.PORT || 5000;

// Start the Express server, listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
