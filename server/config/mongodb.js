require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

module.exports = () => {
    const connect = () => {
        try {
            mongoose.connect(
                connectionString,
                {
                    keepAlive: true,
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                },
            );    
        } catch (error) {
            console.log(error);
        };
    };
    connect();
};