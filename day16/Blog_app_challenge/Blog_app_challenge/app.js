const postroute = require('./routes/postRoutes.js')
const express = require('express');
const app = express();

app.use(express.json)
//*the Logging middleware
app.use((req, res, next) => {
    // Display the logged information in the console 
    console.log(`Date and time of the request :  [${new Date().toISOString()}]`);
    console.log(`the Request method : ${req.method} `);
    console.log(`the Request URL : ${req.url}`);
    next();
});
//*
app.use('/posts', postroute)

//*the  Error handling middleware
app.use((err, req, res, next) => {
    console.log('here is an error ', err);
    res.status(400).json(`oops you encounted an error !! : ${err.message}`);

});
app.listen(3000, () => {
    console.log('server is running on port 3000...');
});
