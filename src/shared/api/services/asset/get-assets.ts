import { api, AssetsCredentials, ResponseAssets } from "@shared/api";

export const getAssets = async ({
  offset,
  search,
  limit = 10,
}: AssetsCredentials = {}): Promise<ResponseAssets> => {
  const { data } = await api.get<ResponseAssets>("/assets", {
    params: {
      search,
      offset,
      limit,
    },
  });

  return data;
};
