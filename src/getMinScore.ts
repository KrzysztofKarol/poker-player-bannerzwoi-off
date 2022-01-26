export const getMinScore = (stack: number, bigBlind: number): number => {

  const stackInBb = Math.round(stack / bigBlind);

  if (stackInBb > 100) {
    return 0.8;
  }

  if (stackInBb > 50) {
    return 0.75;
  }

  if (stackInBb > 20) {
    return 0.7;
  }

  if (stackInBb > 10) {
    return 0.65;
  }

  if (stackInBb > 5) {
    return 0.5;
  }

  if (stackInBb > 3) {
    return 0.2;
  }

  return 0;
};
