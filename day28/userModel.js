const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
    },
    age: {
        type: Number,
        min: [18, 'Must be at least 18 years old'],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
