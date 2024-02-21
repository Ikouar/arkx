// app.js
const http = require('http');
const { handleRequest } = require('./router');

const server = http.createServer(handleRequest);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
