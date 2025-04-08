import { api } from "@shared/api/api";
import { ResponseAsset } from "@shared/api/types";

export const getAsset = async (id: string): Promise<ResponseAsset> => {
  const { data } = await api.get<ResponseAsset>(`/assets/${id}`);

  return data;
};
