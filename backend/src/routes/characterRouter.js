import express from "express";
import { getAllCharacters, getCharacterById } from "../controllers/getCharacters.js";
import { createCharacter } from "../controllers/createCharacter.js";

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", getCharacterById);
characterRouter.post("/", createCharacter);

export default characterRouter;