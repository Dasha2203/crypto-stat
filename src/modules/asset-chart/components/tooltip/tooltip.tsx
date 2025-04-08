import { formatNumber } from "@shared/utils";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import styles from "./styles.module.scss";

export const Tooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload || !payload.length) return null;

  const date = new Date(payload[0].payload.time);
  const formattedDate = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formattedPrice = formatNumber(payload[0].payload.priceUsd, {
    prefix: "$",
  });

  return (
    <div className={styles["tooltip"]}>
      <p>{formattedDate}</p>
      <p>{formattedPrice}</p>
    </div>
  );
};
