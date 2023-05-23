import express from 'express';
import { getAllEpisodes } from '../controllers/episode/getEpisodes.js'

const episodeRouter = express.Router();

episodeRouter.get("/", getAllEpisodes);

export default episodeRouter;