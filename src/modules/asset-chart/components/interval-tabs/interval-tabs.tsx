import { HistoryInterval } from "@shared/api";
import { Button } from "@shared/ui";
import { IntervalTabsProps } from "./interval-tabs.types";
import styles from "./styles.module.scss";

const INTERVAL_LABELS: Record<HistoryInterval, string> = {
  m1: "1 min",
  m5: "5 min",
  m15: "15 min",
  m30: "30 min",
  h1: "1 hour",
  h2: "2 hours",
  h6: "6 hours",
  h12: "12 hours",
  d1: "1 day",
};

export const IntervalTabs = ({ selected, onSelect }: IntervalTabsProps) => {
  return (
    <div className={styles["tabs"]}>
      {Object.entries(INTERVAL_LABELS).map(([key, label]) => (
        <Button
          key={key}
          onClick={() => onSelect(key as HistoryInterval)}
          className={styles["button"]}
          variant={selected === key ? "contained" : "outlined"}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
