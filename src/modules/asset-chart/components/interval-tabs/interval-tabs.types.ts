import { HistoryInterval } from "@shared/api";

export type IntervalTabsProps = {
  selected: HistoryInterval;
  onSelect: (interval: HistoryInterval) => void;
};
