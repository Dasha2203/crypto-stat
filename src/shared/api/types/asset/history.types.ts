import { Response } from "@shared/api";

export interface HistoryAsset {
  priceUsd: string;
  time: number;
}

export type ResponseHistoryAsset = Response<History[]>;
