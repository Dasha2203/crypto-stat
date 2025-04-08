import { HTMLAttributes, ReactElement } from "react";
import { TdProps } from "@shared/ui/table/td/td.types";
import { ThProps } from "@shared/ui/table/th/th.types";

type Children = ReactElement<TdProps | ThProps>;

export type TrProps = HTMLAttributes<HTMLTableRowElement> & {
  children?: Children | Children[];
};
