import express from "express";
const fs = require('fs');
const path = require('path');

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    try {
        return res.status(400).json({"message": "Welcome! "})
    } catch (error) {
        return res.status(400).json(error.message)
    }
});