import { Request, Response } from "express";
import { IWolrdCup } from "../schemas/WorldCupSchema";
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

  public createTournament = async (req: Request, res: Response): Promise<Response> => {
    try {
      const tournament = await this.worldCupService.createTournament(req.body as IWolrdCup);

      return res.status(201).json(tournament);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  }

  public updateTournament = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      const tournament = await this.worldCupService.updateTournament(id, req.body);

      if (!tournament) return res.status(404).json({ error: this.notFound });

      return res.status(200).json(tournament);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  }

  public deleteTournament = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { year } = req.params;

      const tournament = await this.worldCupService.deleteTournament(parseInt(year, 10));

      if (!tournament) return res.status(404).json({ error: this.notFound });

      return res.status(200).json(tournament);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  }
}

export default WorldCupController;
