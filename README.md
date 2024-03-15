## Project Brief Description:

**Project Name:** Web Scraper Application

**Author:** Pramod K Singh

**Version:** 1.0

**Overview:**
This project is a web scraping application built with React for the client-side and Node.js/Express for the server-side. It allows users to input a URL, scrape the text content of the specified webpage, and display the scraped text content. The application utilizes Axios for making HTTP requests, Cheerio for parsing HTML on the server-side, and React state management for handling user input and displaying the scraped text content on the client-side.

---

##Getting Started
To get started with this application, follow the steps below:

##Client Setup:

Navigate to the client directory: cd client
Create a new React application: npx create-react-app .
Install required dependencies: npm install axios cheerio
Build the React application: npm run build

##Server Setup:

Navigate to the server directory: cd ../server
Initialize a new Node.js project: npm init -y
Install required dependencies: npm install express axios cheerio
Start the Node.js/Express server: node app.js


##Running the Application

Once the server is running, you can access the application in your web browser at [http://localhost:5000](http://localhost:5000).

##Notes

- This application fetches data from a website using Axios and parses it using Cheerio.
- The React client-side application is served by the Node.js/Express server.

