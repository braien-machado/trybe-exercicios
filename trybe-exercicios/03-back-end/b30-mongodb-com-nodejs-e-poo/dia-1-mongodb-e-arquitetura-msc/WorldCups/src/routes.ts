import { Router } from "express";
import WorldCupController from "./controllers/WorldCupController";

const worldCupController = new WorldCupController();

const routes = Router();

routes.get('/tournaments', worldCupController.getTournaments);
routes.get('/tournaments/:year', worldCupController.getTournamentById);

export default routes;
