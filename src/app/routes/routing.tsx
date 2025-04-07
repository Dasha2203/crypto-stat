import { BrowserRouter, Routes } from "react-router";
import handleRoutes from "./handle-routes";
import { ROUTES } from "./routes";

export const Routing = () => (
  <BrowserRouter>
    <Routes>{handleRoutes(ROUTES)}</Routes>
  </BrowserRouter>
);
