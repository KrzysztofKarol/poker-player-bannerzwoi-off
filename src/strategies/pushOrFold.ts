import { getOurPosition } from "../getPosition";
import { isSomeoneAllIn } from "../isSomeoneAllIn";
import { getCheckAmount, getOwnState, IGameState } from "../GameState";

/**
 * Returns the minimal hand score to play depending on the current money and bigBlind
 */
export const getMinScore = (stack: number, gameState: IGameState): number => {
  const bigBlind = gameState.big_blind;
  const stackInBb = Math.round(stack / bigBlind);

  try {
    const weNeedToGoAllIn = getCheckAmount(gameState) >= getOwnState(gameState).stack;

    // ENABLE IF NEEDED!
    if (weNeedToGoAllIn) {
      console.log("💰💰💰💰 we need to go all in to check the amount ");
      console.log(gameState.players);
      //return getMinScoreForCallSomeonesAllIn(stackInBb);
    }
  } catch(e) {console.log("💣  ERRRROR", e)}

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
    return 0.85;
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
