import { Schema } from "mongoose";

export interface IWolrdCup {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionStrikers: string[];
  bestPlayer: string;
  bestYoungPlayer: string;
}

export const WorldCupSchema = new Schema<IWolrdCup>({
  year: { type: Number },
  hostCountry: { type: String },
  champions: { type: String },
  runnerUp: { type: String },
  editionStrikers: { type: [String] },
  bestPlayer: { type: String },
  bestYoungPlayer: { type: String },
}, {
  versionKey: false,
});
