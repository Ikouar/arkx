// atm_operations.js
const fs = require('fs');

function checkBalance(user) {
    return user.balance;
}

function depositMoney(user, amount) {
    user.balance += amount;
    user.transactions.push({
        type: 'deposit',
        amount,
        date: new Date().toISOString().slice(0, 10)
    });
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
}

function withdrawMoney(user, amount) {
    if (amount > user.balance) {
        throw new Error('Insufficient funds');
    }
    user.balance -= amount;
    user.transactions.push({
        type: 'withdraw',
        amount,
        date: new Date().toISOString().slice(0, 10)
    });
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
}

function viewTransactions(user) {
    return user.transactions;
}

module.exports = {
    checkBalance,
    depositMoney,
    withdrawMoney,
    viewTransactions
};
