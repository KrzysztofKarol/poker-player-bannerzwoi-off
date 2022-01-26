export const getMinScore = (bb: number) => {
  if (bb > 100) {
    return 0.8;
  }

  if (bb > 50) {
    return 0.75;
  }

  if (bb > 20) {
    return 0.7;
  }

  if (bb > 10) {
    return 0.65;
  }

  if (bb > 5) {
    return 0.5;
  }

  if (bb > 3) {
    return 0.2;
  }

  return 0;
};
