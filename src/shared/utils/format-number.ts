type Options = {
  prefix?: string;
  suffix?: string;
};

export const formatNumber = (
  value: number | string,
  { prefix = "", suffix = "" }: Options = {},
): string => {
  let formattedValue = Number(value);
  let unit = "";

  if (formattedValue >= 1e12) {
    unit = "t";
    formattedValue = formattedValue / 1e12;
  } else if (formattedValue >= 1e9) {
    formattedValue = formattedValue / 1e9;
    unit = "b";
  } else if (formattedValue >= 1e6) {
    formattedValue = formattedValue / 1e6;
    unit = "m";
  } else if (formattedValue >= 1e3) {
    formattedValue = formattedValue / 1e3;
    unit = "k";
  }
  return (
    prefix +
    (new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(formattedValue) +
      unit) +
    suffix
  );
};
