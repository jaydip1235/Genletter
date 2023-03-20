const mongoose = require('mongoose');

const userSchema = (
    {
        googleId: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('User', userSchema);