export const dateFormatLocaleFromIso = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "numeric",
    minute: "numeric",
    hour: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("es-BO", options).format(new Date(date));
};
