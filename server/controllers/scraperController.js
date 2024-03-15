/*
 * Filename: server/controllers/scraperController.js
 * Author: Pramod K Singh
 * Date: March 2024
 * Version: 1.0
 */

// Import necessary modules
const axios = require('axios'); // Import Axios for making HTTP requests
const cheerio = require('cheerio'); // Import Cheerio for parsing HTML

// Define function to scrape data
exports.scrapeData = async (req, res) => {
  try {
    // Extract URL from query parameters
    const { url } = req.query;

    // Fetch HTML content from the specified URL
    const response = await axios.get(url);

    // Extract HTML content from the response
    const html = response.data;

    // Load the HTML content into Cheerio for DOM manipulation
    const $ = cheerio.load(html);

    // Extract text content from the body of the HTML document
    const text = $('body').text();

    // Send the extracted text content as JSON response
    res.json({ text });
  } catch (error) {
    // Handle errors
    console.error('Error fetching data: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
