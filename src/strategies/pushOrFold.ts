import { getOurPosition } from "../getPosition";
import { isSomeoneAllIn } from "../isSomeoneAllIn";
import { IGameState } from "../GameState";

/**
 * Returns the minimal hand score to play depending on the current money and bigBlind
 */
export const getMinScore = (stack: number, gameState: IGameState): number => {
  const bigBlind = gameState.big_blind;
  const stackInBb = Math.round(stack / bigBlind);

  try {
    const someoneAlreadyAllIn = isSomeoneAllIn(gameState);

    console.log({
      name: "PUSH_OR_FOLD",
      someoneAlreadyAllIn,
      stackInBb,
    });
    console.log(gameState.players);
  } catch (error) {
    console.log({ error })
  }

  // ENABLE IF NEEDED!
  // if (someoneAlreadyAllIn) {
  //  return getMinScoreForCallSomeonesAllIn(stackInBb);
  //}

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

const getMinScoreForCallSomeonesAllIn = (stackInBb: number): number => {
  if (stackInBb > 50) {
    return 0.8;
  }

  if (stackInBb > 20) {
    return 0.75;
  }

  if (stackInBb > 10) {
    return 0.65;
  }

  if (stackInBb > 5) {
    return 0.6;
  }

  if (stackInBb > 3) {
    return 0.55;
  }

  if (stackInBb > 2) {
    return 0.5;
  }

  return 0;
};

export const getMinScoreWithPosition = (
  stack: number,
  gameState: IGameState
) => {
  const postition = getOurPosition(gameState);

  // MPs
  if (postition === "MP" || postition === "MP+1") {
  }

  // LPs
  if (postition === "HJ" || postition === "CO" || postition === "BTN") {
  }

  // Blinds
  if (postition === "SB" || postition === "BB") {
  }
};
