import { HTMLAttributes, ReactElement } from "react";
import { TrProps } from "@shared/ui/table/tr/tr.types";

type Children = ReactElement<TrProps>;

export type TBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  children?: Children | Children[];
};
