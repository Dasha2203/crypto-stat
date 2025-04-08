import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAsset } from "@shared/api";

export const useGetAsset = () => {
  const { assetId } = useParams<{ assetId: string }>();

  return useQuery({
    queryKey: ["asset", assetId],
    queryFn: () => getAsset(assetId!),
    enabled: !!assetId,
  });
};
