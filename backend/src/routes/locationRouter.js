import express from 'express';
import { getAllLocations } from '../controllers/location/getLocations.js';

const locationRouter = express.Router();

locationRouter.get("/", getAllLocations);

export default locationRouter;