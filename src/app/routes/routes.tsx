import { PATHS } from "@shared/routes";
import { HomePage } from "@pages";
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
            element: <div>assets</div>,
          },
          {
            path: PATHS.assets.children?.asset.path,
            element: <div>asset</div>,
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
