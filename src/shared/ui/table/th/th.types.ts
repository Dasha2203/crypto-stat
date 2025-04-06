import { ReactNode, TdHTMLAttributes } from "react";
import { SortOrder } from "@shared/types";

export type ThProps = TdHTMLAttributes<HTMLTableCellElement> & {
  children?: ReactNode;
  sort?: SortOrder;
};
