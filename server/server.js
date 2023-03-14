const express = require("express");
const PORT = process.env.PORT || 3500
const initDB = require('./config/mongodb');
const mongoose = require('mongoose');

initDB();

const app = express();

mongoose.connection.once("open", () => {
    console.log("Connected to database");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})