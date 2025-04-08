import clsx from "clsx";
import styles from "./styles.module.scss";
import { LoaderProps } from "./loader.types";

export const Loader = ({ className, style }: LoaderProps) => {
  return (
    <div className={clsx(styles["loader"], className)} style={style}></div>
  );
};
