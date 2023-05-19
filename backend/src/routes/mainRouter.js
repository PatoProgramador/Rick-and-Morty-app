import express from "express";
const fs = require('fs');
const path = require('path');

const mainRouter = express.Router();

// app.get('/', (req, res) => {
//     const controllersPath = path.join(__dirname, 'controllers');
//     fs.readdir(controllersPath, (err, files) => {
//       if (err) {
//         console.error('Error al leer las carpetas de los controladores:', err);
//         res.status(500).send('Error del servidor');
//         return;
//       }
  
//       const controllerNames = files.map(file => path.parse(file).name);
//       res.send(controllerNames);
//     });
//   });
  
//   app.listen(3000, () => {
//     console.log('Servidor iniciado en http://localhost:3000');
//   });
mainRouter.get("/", (req, res) => {
    try {
        return res.status(400).json({"message": "Welcome! "})
    } catch (error) {
        return res.status(400).json(error.message)
    }
});