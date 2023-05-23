import express from "express";
import fs from 'fs';
import path from 'path';

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    try {
        const controllersPath = path.join('src', 'controllers');
        fs.readdir(controllersPath, (err, files) => {
            if (err) {
                console.error('Error al leer las carpetas de los controladores:', err);
                res.status(500).send('Error del servidor');
                return;
            }
            const controllerNames = files.map(file => "/" + path.parse(file).name);
            res.send(`Welcome! here are the routes that you can use: ${controllerNames}`);
        });
    } catch (error) {
        return res.status(400).json(error.message)
    }
});

export default mainRouter;