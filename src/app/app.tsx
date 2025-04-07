import { Routing } from "./routes";
import { QueryProvider } from "./query";
import "./index.scss";

export const App = () => {
  return (
    <QueryProvider>
      <Routing />
    </QueryProvider>
  );
};
