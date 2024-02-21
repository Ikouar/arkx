// Importing necessary modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route handler for the root URL (/)
app.get('/', (req, res) => {
res.send('Welcome to my Express.js server!');


});

// Configure the application to listen on port 3000
const port = 3000;
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
