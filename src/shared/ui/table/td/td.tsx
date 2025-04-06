import clsx from "clsx";
import { TdProps } from "./td.types";
import styles from "./styles.module.scss";

export const Td = ({ children, className, ...props }: TdProps) => {
  return (
    <td className={clsx("td", styles["td"], className)} {...props}>
      {children}
    </td>
  );
};
