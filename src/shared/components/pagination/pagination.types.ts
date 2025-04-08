import { StyledProps } from "@shared/types";

export type PaginationProps = StyledProps & {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};
