import express from 'express';
import { getAllEpisodes, getEpisodeById } from '../controllers/episode/getEpisodes.js'

const episodeRouter = express.Router();

episodeRouter.get("/", getAllEpisodes);
episodeRouter.get("/:id", getEpisodeById);

export default episodeRouter;