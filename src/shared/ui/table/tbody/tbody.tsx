import clsx from "clsx";
import { TBodyProps } from "./tbody.types";
import styles from "./styles.module.scss";

export const TBody = ({ children, className, ...props }: TBodyProps) => {
  return (
    <tbody className={clsx(styles["tbody"], className)} {...props}>
      {children}
    </tbody>
  );
};
