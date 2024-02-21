// router.js
const { authenticateUser } = require('./authentication');
const { checkBalance, depositMoney, withdrawMoney, viewTransactions } = require('./atm_operations');

function handleRequest(req, res) {
    // Extract data from request
    const { method, url, headers } = req;
    const [, endpoint] = url.split('/').filter(Boolean);
    const body = [];

    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        const requestBody = Buffer.concat(body).toString();

        // Handle requests based on endpoint and method
        switch (method) {
            case 'POST':
                handlePostRequest(endpoint, JSON.parse(requestBody), res);
                break;
            case 'GET':
                handleGetRequest(endpoint, headers, res);
                break;
            default:
                sendResponse(res, 404, 'Not Found');
        }
    });
}

function handlePostRequest(endpoint, data, res) {
    switch (endpoint) {
        case 'login':
            const { accountID, pin } = data;
            const user = authenticateUser(accountID, pin);
            if (user) {
                sendResponse(res, 200, 'Login successful', user);
            } else {
                sendResponse(res, 401, 'Invalid credentials');
            }
            break;
        case 'deposit':
            // Implementation for depositing money
            break;
        case 'withdraw':
            // Implementation for withdrawing money
            break;
        default:
            sendResponse(res, 404, 'Not Found');
    }
}

function handleGetRequest(endpoint, headers, res) {
    switch (endpoint) {
        case 'balance':
            // Implementation for checking balance
            break;
        case 'transactions':
            // Implementation for viewing transactions
            break;
        default:
            sendResponse(res, 404, 'Not Found');
    }
}

function sendResponse(res, statusCode, message, data = null) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    const response = { message };
    if (data) {
        response.data = data;
    }
    res.end(JSON.stringify(response));
}

module.exports = { handleRequest };
