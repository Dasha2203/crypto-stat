import { useGetAsset } from "@shared/api";
import { NoResult } from "@shared/components";
import { Loader } from "@shared/ui";
import { formatNumber } from "@shared/utils";
import styles from "./styles.module.scss";

export const AssetInfo = () => {
  const { data, isLoading } = useGetAsset();

  if (isLoading) return <Loader />;
  if (!data?.data) return <NoResult />;

  return (
    <div className={styles["asset-info"]}>
      <h1 className={styles["title"]}>
        {data.data.name}
        <span>{data.data.symbol}</span>
      </h1>
      <div className={styles["description"]}>
        <p>
          Curren Price:{" "}
          <span>{formatNumber(data.data.priceUsd, { prefix: "$" })}</span>
        </p>
        <p>
          Market Cap:{" "}
          <span>{formatNumber(data.data.marketCapUsd, { prefix: "$" })}</span>
        </p>
      </div>
    </div>
  );
};
