import express from "express";
import morgan from "morgan";
import characterRouter from "../src/routes/characterRouter.js";
import mainRouter from "../src/routes/mainRouter.js";
import episodeRouter from "../src/routes/episodeRouter.js";
import locationRouter from "../src/routes/locationRouter.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
app.use("/", mainRouter);
app.use("/characters", characterRouter);
app.use("/episodes", episodeRouter);
app.use("/locations", locationRouter);

export default app;