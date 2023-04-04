const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        gender: {
            type: String
        },
        origin: {
            type: String,
            required: true
        },
        location: {
            type: String
        }
    }, {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema);
