import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getHistoryAsset, HistoryInterval } from "@shared/api";

export const useGetHistoryAsset = (interval: HistoryInterval) => {
  const { assetId } = useParams<{ assetId: string }>();

  return useQuery({
    queryKey: ["history", assetId, interval],
    queryFn: () => getHistoryAsset({ id: assetId!, interval }),
    enabled: !!assetId && !!interval,
  });
};
