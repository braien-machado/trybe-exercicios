import { Request, Response } from "express";
import WorldCupService from "../services/WorldCupService";

class WorldCupController {
  constructor(private worldCupService = new WorldCupService()) {}

  notFound = 'There was no world cup in this year';

  internalError = 'Internal server error';

  public getTournaments = async (req: Request, res: Response): Promise<Response> => {
    try {
      const tournaments = await this.worldCupService.getTournaments();

      return res.status(200).json(tournaments);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  }

  public getTournamentById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { year } = req.params;

      const tournament = await this.worldCupService.getTournamentByYear(parseInt(year, 10));

      if (!tournament) return res.status(404).json({ error: this.notFound });

      return res.status(200).json(tournament);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  }
}

export default WorldCupController;
