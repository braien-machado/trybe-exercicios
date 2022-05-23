import { Router } from "express";
import WorldCupController from "./controllers/WorldCupController";

const worldCupController = new WorldCupController();

const routes = Router();

routes.get('/tournaments', worldCupController.getTournaments);
routes.get('/tournaments/:year', worldCupController.getTournamentById);
routes.post('/tournaments', worldCupController.createTournament);
routes.put('/tournaments/:id', worldCupController.updateTournament);
routes.delete('/tournaments/:year', worldCupController.deleteTournament);

export default routes;
