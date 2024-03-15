/*
 * Filename: server/routes/scraperRoutes.js
 * Author: Pramod K Singh
 * Date: March 2024
 * Version: 1.0
 */

// Import necessary modules
const express = require('express'); // Import Express.js framework
const router = express.Router(); // Create an instance of Express Router
const scraperController = require('../controllers/scraperController'); // Import scraper controller module

// Define route for '/scrape' endpoint
router.get('/scrape', scraperController.scrapeData);

// Export the router instance for use in other files
module.exports = router;
