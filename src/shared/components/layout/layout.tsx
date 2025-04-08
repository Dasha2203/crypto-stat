import { Outlet } from "react-router";
import { Header } from "./header/header";
import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles["container"]}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
