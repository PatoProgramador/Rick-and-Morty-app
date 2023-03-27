const serverless = require("serverless-http");
const express = require("express");


const app = express();

app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Hello from another lambda",
    });
});

module.exports.handler = serverless(app);