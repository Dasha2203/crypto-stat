import { StyledProps } from "@shared/types";
export type SearchFormData = {
  search: string;
};

export type SearchFieldProps = StyledProps & {
  placeHolder?: string;
};
