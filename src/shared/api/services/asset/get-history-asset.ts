import { api, HistoryInterval, ResponseHistoryAsset } from "@shared/api";

type Properties = {
  id: string;
  interval?: HistoryInterval;
};

export const getHistoryAsset = async ({
  id,
  interval = "m1",
}: Properties): Promise<ResponseHistoryAsset> => {
  const { data } = await api.get<ResponseHistoryAsset>(
    `/assets/${id}/history`,
    {
      params: {
        interval,
      },
    },
  );

  return data;
};
