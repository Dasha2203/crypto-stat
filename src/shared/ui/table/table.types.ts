import { HTMLAttributes, ReactElement } from "react";
import { TBodyProps } from "./tbody/tbody.types";
import { THeadProps } from "./thead/thead.types";

type Children = ReactElement<TBodyProps | THeadProps>;

export type TableProps = HTMLAttributes<HTMLTableElement> & {
  children?: Children | Children[];
};
