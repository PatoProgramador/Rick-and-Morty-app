import express from "express";
import { getAllCharacters, getCharacterById } from "../controllers/character/getCharacters.js";
import { createCharacter } from "../controllers/character/createCharacter.js";
import { updateCharacter } from "../controllers/character/updateCharacter.js";
import { deleteCharacter } from "../controllers/character/deleteCharacter.js";

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", getCharacterById);
characterRouter.put("/:id", updateCharacter);
characterRouter.delete("/:id", deleteCharacter);
characterRouter.post("/", createCharacter);

export default characterRouter;