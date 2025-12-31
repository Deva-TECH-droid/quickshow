const timeFormat = (mins) => {
  if (!mins || mins <= 0) return "N/A";

  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  return `${hours}h ${minutes}m`;
};

export default timeFormat;
