import clsx from "clsx";
import { TableProps } from "./table.types";
import styles from "./styles.module.scss";

export const Table = ({ children, className, ...props }: TableProps) => {
  return (
    <table className={clsx(styles["table"], className)} {...props}>
      {children}
    </table>
  );
};
