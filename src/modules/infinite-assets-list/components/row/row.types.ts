import { Asset } from "@shared/api/types";

export type RowProps = {
  asset: Asset;
  onClick?: () => void;
};
