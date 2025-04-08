import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NoResult } from "@components";
import { Table, TBody, Th, THead, Tr, Loader } from "@shared/ui";
import { sortByKey } from "@shared/utils";
import { useInfiniteAssets, Asset } from "@shared/api";
import { useInfiniteScroll } from "@shared/hooks";
import { SortOrder } from "@shared/types";
import { Row } from "./components";
import styles from "./styles.module.scss";

const columnsMap: Partial<Record<keyof Asset, string>> = {
  rank: "Rank",
  name: "Name",
  priceUsd: "Price",
  marketCapUsd: "Market Cap",
  vwap24Hr: "VWAP (24Hr)",
  supply: "Supply",
  volumeUsd24Hr: "Volume (24Hr)",
  changePercent24Hr: "Change (24Hr)",
};

const columns: (keyof typeof columnsMap)[] = [
  "rank",
  "name",
  "priceUsd",
  "marketCapUsd",
  "vwap24Hr",
  "supply",
  "volumeUsd24Hr",
  "changePercent24Hr",
];

export const AssetsList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteAssets();
  const navigate = useNavigate();
  const [assets, setAssets] = useState<Asset[]>([]);
  const [sortKey, setSortKey] = useState<keyof Asset | null>(null);
  const [sortDirection, setSortDirection] = useState<SortOrder>(SortOrder.ASC);
  const loaderRef = useInfiniteScroll(
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  );

  const handleCellClick = (key: keyof Asset) => {
    if (key === sortKey) {
      setSortDirection((prev) =>
        prev === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
      );
      return;
    }
    setSortKey(key);
    setSortDirection(SortOrder.ASC);
  };

  useEffect(() => {
    const assets = data?.pages.flatMap((page) => page.data) || [];

    if (sortKey) {
      setAssets(sortByKey(assets, sortKey, sortDirection));
      return;
    }

    setAssets(assets);
  }, [data?.pages, setAssets, sortKey, sortDirection]);

  if (isLoading) return <Loader className={styles["loader"]} />;

  if (!data?.pages.length) return <NoResult className={styles["no-result"]} />;

  if (error) return <>Something went wrong</>;

  return (
    <>
      {!data?.pages.length && <NoResult />}
      <div className={styles["table-wrap"]}>
        <Table className={styles["table"]}>
          <THead>
            <Tr>
              {columns.map((col) => (
                <Th
                  key={col}
                  colSpan={col === "name" ? 3 : 1}
                  sort={col === sortKey ? sortDirection : undefined}
                  onClick={() => handleCellClick(col)}
                >
                  {columnsMap[col]}
                </Th>
              ))}
            </Tr>
          </THead>
          <TBody>
            {assets.map((asset) => (
              <Row
                key={asset.id}
                asset={asset}
                onClick={() => navigate(`/assets/${asset.id}`)}
              />
            ))}
          </TBody>
        </Table>
      </div>

      {isFetchingNextPage && <Loader className={styles["loader"]} />}

      <div ref={loaderRef} />
    </>
  );
};
