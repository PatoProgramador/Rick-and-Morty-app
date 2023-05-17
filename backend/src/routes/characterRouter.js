import express from "express";
import { getCharacters } from "../controllers/getCharacters.js";

const characterRouter = express.Router();

characterRouter.get("/", getCharacters)

export default characterRouter;