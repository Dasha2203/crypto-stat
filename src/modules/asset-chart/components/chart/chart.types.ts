import { HistoryAsset, HistoryInterval } from "@shared/api";

export type ChartProps = {
  data: HistoryAsset[];
  interval: HistoryInterval;
};
