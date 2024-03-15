/*
 * Filename: App.js
 * Author: Pramod K Singh
 * Date: March 2024
 * Version: 1.0
 */

import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import Axios for making HTTP requests

function App() {
    // Define state variables
    const [url, setUrl] = useState(''); // State variable for storing URL input
    const [text, setText] = useState(''); // State variable for storing scraped text content

    // Function to handle scraping URL
    const scrapeUrl = async () => {
        try {
            // Display loading message
            setText('Loading...');

            // Make HTTP GET request to the server's /api/scrape endpoint with the provided URL
            const response = await axios.get(`/api/scrape?url=${url}`);

            // Log the response data to console
            console.log(response.data);

            // Update the text state variable with the scraped text content received from the server
            setText(response.data.text);
        } catch (error) {
            // If an error occurs during the HTTP request, display an error message
            setText('Error: ' + error);
            console.error('Error:', error);
        }
    };

    // Render the component
    return (
        <div>
            <h1>URL</h1>
            {/* Input field for entering the URL */}
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL of website." style={{width:"400px"}}/> &nbsp;&nbsp;
            {/* Button to trigger the scraping process */}
            <button onClick={scrapeUrl}>Submit</button>
            <div>
                <h2>Scraped Text</h2>
                {/* Display the scraped text content */}
                <p>{text}</p>
            </div>
        </div>
    );
}

export default App;
