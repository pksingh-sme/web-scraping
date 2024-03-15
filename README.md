## Project Brief Description:

**Project Name:** Web Scraper Application

**Author:** Pramod K Singh

**Version:** 1.0

**Overview:**
This project is a web scraping application built with React for the client-side and Node.js/Express for the server-side. It allows users to input a URL, scrape the text content of the specified webpage, and display the scraped text content. The application utilizes Axios for making HTTP requests, Cheerio for parsing HTML on the server-side, and React state management for handling user input and displaying the scraped text content on the client-side.

---

## Getting Started
To get started with this application, follow the steps below:

## Client Setup:

1. Navigate to the client directory:
    ```bash
    cd client
    ```

2. Create a new React application:
    ```bash
    npx create-react-app .
    ```

3. Install required dependencies:
    ```bash
    npm install axios cheerio
    ```

4. Build the React application:
    ```bash
    npm run build
    ```

## Server Setup:

1. Navigate to the server directory:
    ```bash
    cd ../server
    ```

2. Initialize a new Node.js project:
    ```bash
    npm init -y
    ```

3. Install required dependencies:
    ```bash
    npm install express axios cheerio
    ```

4. Start the Node.js/Express server:
    ```bash
    node app.js


## Running the Application

Once the server is running, you can access the application in your web browser at [http://localhost:5000](http://localhost:5000).

---

## Notes

- This application fetches data from a website using Axios and parses it using Cheerio.
- The React client-side application is served by the Node.js/Express server.

