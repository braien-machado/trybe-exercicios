import { model as createModel } from "mongoose";
import { WorldCupSchema, IWolrdCup } from "../schemas/WorldCupSchema";

class WorldCupModel {
  constructor(private worldCupModel =  createModel<IWolrdCup>('tournaments', WorldCupSchema)) {}

  public async getTournaments(): Promise<IWolrdCup[]> {
    return this.worldCupModel.find();
  }

  public async getTournamentByYear(year: number): Promise<IWolrdCup | null> {
    return this.worldCupModel.findOne({ year });
  }

  public async createTournament(cupInfo: IWolrdCup): Promise<IWolrdCup> {
    return this.worldCupModel.create(cupInfo);
  }

  public async updateTournament(id: string, cupInfo: object): Promise<IWolrdCup | null> {
    return this.worldCupModel.findByIdAndUpdate(id, cupInfo, { new: true });
  }

  public async deleteTournament(year: number): Promise<IWolrdCup | null> {
    return this.worldCupModel.findOneAndDelete({ year });
  }
}

export default WorldCupModel;
