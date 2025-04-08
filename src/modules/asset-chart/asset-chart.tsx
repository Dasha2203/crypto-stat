import { useState } from "react";
import clsx from "clsx";
import { HistoryInterval, useGetHistoryAsset } from "@shared/api";
import { Loader } from "@shared/ui";
import { Chart, IntervalTabs } from "./components";
import styles from "./styles.module.scss";
import { AssetChartProps } from "./asset-chart.types";

export const AssetChart = ({ className, style }: AssetChartProps) => {
  const [interval, setInterval] = useState<HistoryInterval>("d1");
  const { data, isLoading } = useGetHistoryAsset(interval);

  if (isLoading) return <Loader className={styles["loader"]} />;
  if (!data) return null;

  return (
    <div className={clsx(styles["chart"], className)} style={style}>
      <IntervalTabs selected={interval} onSelect={setInterval} />
      <div>
        <Chart data={data.data} interval={interval} />
      </div>
    </div>
  );
};
