// authentication.js
const fs = require('fs');

function authenticateUser(accountID, pin) {
    // Read users from file
    const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
    const user = users.find(u => u.accountID === accountID && u.pin === pin);

    return user;
}

module.exports = { authenticateUser };
