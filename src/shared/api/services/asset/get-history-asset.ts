import { api, ResponseHistoryAsset } from "@shared/api";

export const getHistoryAsset = async (
  id: string,
): Promise<ResponseHistoryAsset> => {
  const { data } = await api.get<ResponseHistoryAsset>(`/assets/${id}/history`);

  return data;
};
