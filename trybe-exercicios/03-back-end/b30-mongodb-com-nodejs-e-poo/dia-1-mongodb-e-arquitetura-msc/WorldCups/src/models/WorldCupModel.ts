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
}

export default WorldCupModel;
