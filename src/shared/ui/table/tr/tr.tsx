import clsx from "clsx";
import { TrProps } from "./tr.types";
import styles from "./styles.module.scss";

export const Tr = ({ children, className, ...props }: TrProps) => {
  return (
    <tr className={clsx("tr", styles["tr"], className)} {...props}>
      {children}
    </tr>
  );
};
