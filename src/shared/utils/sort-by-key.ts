import { SortOrder } from "@shared/types";

export const sortByKey = <T>(
  data: T[],
  key: keyof T,
  direction: SortOrder = SortOrder.ASC,
): T[] => {
  return [...data].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    const isNumber = typeof valA === "number" || !isNaN(Number(valA));
    const aValue = isNumber ? Number(valA) : String(valA);
    const bValue = isNumber ? Number(valB) : String(valB);

    if (aValue < bValue) return direction === SortOrder.ASC ? -1 : 1;
    if (aValue > bValue) return direction === SortOrder.ASC ? 1 : -1;
    return 0;
  });
};
