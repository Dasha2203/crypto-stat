import { PATH } from "./routes.types";

export const PATHS: Record<string, PATH> = {
  home: {
    path: "/",
  },
  assets: {
    path: "/assets",
    children: {
      asset: {
        path: ":assetId",
      },
    },
  },
};
