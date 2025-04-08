import { formatDate } from "@modules/asset-chart/utils";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip as CustomTooltip } from "@modules/asset-chart/components";
import { ChartProps } from "./chart.types";

export const Chart = ({ data, interval }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data.map((item) => ({
          time: new Date(item.time),
          priceUsd: parseFloat(item.priceUsd),
        }))}
        margin={{
          bottom: 30,
          right: 20,
        }}
      >
        <XAxis
          dataKey="time"
          tickFormatter={(time) => formatDate(new Date(time), interval)}
          interval={Math.floor(data.length / 5)}
          angle={-30}
          textAnchor="end"
          tickSize={10}
          tick={{ fontSize: 12 }}
        />
        <YAxis tickSize={10} tick={{ fontSize: 12 }} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="priceUsd"
          stroke="#18c683"
          fill="#18c683"
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
