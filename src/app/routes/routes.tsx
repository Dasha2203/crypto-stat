import { PATHS } from "@shared/routes";
import { HomePage, AssetPage } from "@pages";
import { Layout } from "@components";
import { Route } from "./routes.types";

export const ROUTES: Route[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.assets.path,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: PATHS.assets.children?.asset.path,
            element: <AssetPage />,
          },
        ],
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
];
