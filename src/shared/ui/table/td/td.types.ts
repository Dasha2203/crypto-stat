import { ReactNode, TdHTMLAttributes } from "react";

export type TdProps = TdHTMLAttributes<HTMLTableCellElement> & {
  children?: ReactNode;
};
