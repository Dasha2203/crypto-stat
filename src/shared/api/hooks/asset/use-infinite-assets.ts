import { useSearchParams } from "react-router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAssets, ResponseAssets } from "@shared/api";

const LIMIT = 20;

export const useInfiniteAssets = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return useInfiniteQuery<ResponseAssets, Error>({
    queryKey: ["assets", search],
    queryFn: ({ pageParam = 0 }) =>
      getAssets({ offset: pageParam as number, limit: LIMIT, search }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.length < LIMIT) {
        return false;
      }
      return pages.length * LIMIT;
    },
    initialPageParam: 0,
    refetchInterval: 60 * 1000,
  });
};
