import express from "express";
import { getCharacters } from "../controllers/getCharacters.js";
import { createCharacter } from "../controllers/createCharacter.js";

const characterRouter = express.Router();

characterRouter.get("/", getCharacters);
characterRouter.post("/", createCharacter);

export default characterRouter;