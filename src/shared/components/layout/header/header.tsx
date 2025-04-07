import { Link } from "react-router";
import styles from "./styles.module.scss";
import { PATHS } from "@shared/routes";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <Link to={PATHS.home.path} className={styles["header__logo"]}>
          CryptoStat
        </Link>
      </div>
    </header>
  );
};
