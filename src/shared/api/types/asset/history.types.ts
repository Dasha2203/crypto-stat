import { Response } from "@shared/api";

export interface HistoryAsset {
  priceUsd: string;
  date: string;
  time: number;
}

export type HistoryInterval =
  | "m1"
  | "m5"
  | "m15"
  | "m30"
  | "h1"
  | "h2"
  | "h6"
  | "h12"
  | "d1";

export type ResponseHistoryAsset = Response<HistoryAsset[]>;
