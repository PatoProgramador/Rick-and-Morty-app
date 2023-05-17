import { startServer } from "./config/app.js";
import { connectDB } from "./config/mongodb.js";
import mongoose from "mongoose";

connectDB()
mongoose.connection.once('open', (err, resp) => {
    startServer()
});