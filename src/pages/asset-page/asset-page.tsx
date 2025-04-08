import { AssetChart, AssetInfo } from "@modules";
import styles from "./styles.module.scss";

export const AssetPage = () => {
  return (
    <>
      <AssetInfo />
      <AssetChart className={styles["chart"]} />
    </>
  );
};
