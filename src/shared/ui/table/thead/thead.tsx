import { THeadProps } from "./thead.types";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const THead = ({ children, className, ...props }: THeadProps) => {
  return (
    <thead className={clsx("thead", styles["thead"], className)} {...props}>
      {children}
    </thead>
  );
};
