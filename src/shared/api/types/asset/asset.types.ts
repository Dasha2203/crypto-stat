import { Response } from "@shared/api";

export interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export type ResponseAsset = Response<Asset>;
export type ResponseAssets = Response<Asset[]>;

export type AssetsCredentials = {
  offset?: string | number;
  limit?: string | number;
  search?: string;
};
