import express from "express";
import { getAllCharacters, getCharacterById } from "../controllers/getCharacters.js";
import { createCharacter } from "../controllers/createCharacter.js";
import { updateCharacter } from "../controllers/updateCharacter.js";
import { deleteCharacter } from "../controllers/deleteCharacter.js";

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", getCharacterById);
characterRouter.put("/:id", updateCharacter);
characterRouter.delete("/:id", deleteCharacter)
characterRouter.post("/", createCharacter);

export default characterRouter;