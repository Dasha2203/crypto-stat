export type Route = {
  path?: string;
  element?: React.ReactNode;
  index?: boolean;
  children?: Route[];
};
