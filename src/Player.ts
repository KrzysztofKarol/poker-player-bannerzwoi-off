import { getMinScore } from "./strategies/pushOrFold";
import { startingHandOds } from "./consts/startingHandOds";
import { getCurrentHighestBet, getOwnState, ICard, IGameState } from "./GameState";

export class Player {
  // BlindBased StartHandScore Logic
  static strategyName = "BB SHS Logic";

  public async betRequest(gameState: IGameState): Promise<number> {
    const playerState = getOwnState(gameState);
    const hands = playerState.hole_cards || [];
    const startHandScore = calculateStartingHandScore(hands);


    console.log("\n------------------");
    console.log("ROUND", gameState.round);
    console.log("------------------\n");
    console.log(playerState);

    const minScore = getMinScore(playerState.stack, gameState);

    console.log({
      startHandScore,
      hands,
      bigBlind: gameState.big_blind,
      smallBlind: gameState.small_blind,
      minScore,
      highestBet: getCurrentHighestBet(gameState),
    });
    console.log("\n");
    console.log("💰 Cash:", playerState.stack);

    // GO all in for good hand
    if (startHandScore >= minScore) {
      console.log("🤩 awesome hand! - I'm all in!");
      return 66_6666;
    }

    // Reinvest small blind
    console.log("🤮 horrible hand - don't raise");
    return 0;
  }

  public showdown(gameState: IGameState): void {}
}

const calculateStartingHandScore = (cards: ICard[]) => {
  if (cards.length < 2) {
    return 0;
  }
  return startingHandOds[cards[0].rank][cards[1].rank];
};

export default Player;