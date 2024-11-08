export const getDecimalPlaces = (step: number) => {
  const parts = step.toString().split('.');
  return parts.length > 1 ? parts[1].length : 0;
};
