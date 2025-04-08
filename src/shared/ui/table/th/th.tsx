import clsx from "clsx";
import { ArrowDownIcon } from "@icons";
import { ThProps } from "./th.types";
import styles from "./styles.module.scss";

export const Th = ({ sort, children, className, ...props }: ThProps) => {
  return (
    <th
      className={clsx(
        styles["th"],
        sort,
        props.onClick && styles["hover"],
        className,
      )}
      {...props}
    >
      <div className={clsx(styles["th__content"])}>
        {children}
        {sort && <ArrowDownIcon className={styles["icon"]} />}
      </div>
    </th>
  );
};
