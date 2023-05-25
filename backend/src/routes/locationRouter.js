import express from 'express';
import { getAllLocations, getLocationById } from '../controllers/location/getLocations.js';

const locationRouter = express.Router();

locationRouter.get("/", getAllLocations);
locationRouter.get("/:id", getLocationById);

export default locationRouter;