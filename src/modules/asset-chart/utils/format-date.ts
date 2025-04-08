import { HistoryInterval } from "@shared/api";

export const formatDate = (date: Date, interval: HistoryInterval) => {
  switch (interval) {
    case "m1":
    case "m5":
    case "m15":
    case "m30":
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    case "h1":
    case "h2":
    case "h6":
    case "h12":
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    case "d1":
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
      });
    default:
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
      });
  }
};
