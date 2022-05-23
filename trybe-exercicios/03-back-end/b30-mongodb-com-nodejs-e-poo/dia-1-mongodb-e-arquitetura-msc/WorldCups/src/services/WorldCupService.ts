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
}

export default WorldCupService;
