import { SearchField } from "@components";
import { AssetsList } from "@modules";

export const HomePage = () => {
  return (
    <>
      <SearchField placeHolder={"Enter the name of the cryptocurrency"} />
      <AssetsList />
    </>
  );
};
