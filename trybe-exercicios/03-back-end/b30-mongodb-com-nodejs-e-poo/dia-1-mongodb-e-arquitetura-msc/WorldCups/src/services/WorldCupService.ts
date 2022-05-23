import WorldCupModel from "../models/WorldCupModel";
import { IWolrdCup } from "../schemas/WorldCupSchema";

class WorldCupService {
  constructor(private worldCupModel = new WorldCupModel()) {}

  public async getTournaments(): Promise<IWolrdCup[]> {
    return this.worldCupModel.getTournaments();
  }

  public async getTournamentByYear(year: number): Promise<IWolrdCup | null> {
    return this.worldCupModel.getTournamentByYear(year);
  }

  public async createTournament(cupInfo: IWolrdCup): Promise<IWolrdCup> {
    return this.worldCupModel.createTournament(cupInfo);
  }

  public async updateTournament(id: string, cupInfo: object): Promise<IWolrdCup | null> {
    return this.worldCupModel.updateTournament(id, cupInfo);
  }

  public async deleteTournament(year: number): Promise<IWolrdCup | null> {
    return this.worldCupModel.deleteTournament(year);
  }
}

export default WorldCupService;
