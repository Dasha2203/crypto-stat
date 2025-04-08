import clsx from "clsx";
import { Td, Tr } from "@shared/ui";
import { formatNumber } from "@shared/utils";
import { RowProps } from "./row.types";
import styles from "./styles.module.scss";

export const Row = ({
  asset: {
    rank,
    name,
    priceUsd,
    marketCapUsd,
    volumeUsd24Hr,
    vwap24Hr,
    supply,
    changePercent24Hr,
  },
  onClick,
}: RowProps) => {
  return (
    <Tr onClick={onClick}>
      <Td>{rank}</Td>
      <Td colSpan={3}>{name}</Td>
      <Td>{formatNumber(priceUsd, { prefix: "$" })}</Td>
      <Td>{formatNumber(marketCapUsd, { prefix: "$" })}</Td>
      <Td>{formatNumber(vwap24Hr, { prefix: "$" })}</Td>
      <Td>{formatNumber(supply)}</Td>
      <Td>{formatNumber(volumeUsd24Hr, { prefix: "$" })}</Td>
      <Td
        className={clsx(
          +changePercent24Hr > 0 ? styles["green"] : styles["red"],
        )}
      >
        {formatNumber(changePercent24Hr, { suffix: "%" })}
      </Td>
    </Tr>
  );
};
