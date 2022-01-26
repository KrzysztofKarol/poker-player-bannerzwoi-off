import { getMinScore } from "./getMinScore";
import { startingHandOds } from "./startingHandOds";

export class Player {
  public async betRequest(gameState: IGameState): Promise<number> {
    const playerState = this.getOwnState(gameState);
    const hands = playerState.hole_cards || [];
    const startHandScore = this.getStartingHandScore(hands);

    const MIN_SCORE = 0.6;


    const stack = playerState.stack;
    const bb = gameState.big_blind;

    const stackInBb = Math.round(stack / bb);

    const minScore = getMinScore(stackInBb)

    console.log({ startHandScore, hands, bigBlind: gameState.big_blind, smallBlind: gameState.small_blind, MIN_SCORE, minScore });
    console.log(playerState);
    console.log("💰", playerState.stack);




    // Go all in on invalid card amount
    if (hands.length < 2) {
      console.log("❌ INVALID HAND????");
      return 10000;
    }
    if (startHandScore > MIN_SCORE) {
      return 10000;
    }
    return 0;
  }

  public showdown(gameState: IGameState): void {}

  public getOwnState(gameState: IGameState): IPlayer {
    const ourName = "Bannerzwoi off";
    const player = gameState.players.find((player) => player.name === ourName);
    if (!player) {
      throw new Error("Player not found");
    }
    return player;
  }

  public getOwnHand(gameState: IGameState): ICard[] {
    const ownState = this.getOwnState(gameState);
    return ownState.hole_cards || [];
  }

  public getStartingHandScore(cards: ICard[]) {
    if (cards.length < 2) {
      return 0;
    }
    return startingHandOds[cards[0].rank][cards[1].rank];
  }
}

export default Player;

export interface IGameState {
  players: IPlayer[];
  tournament_id: string;
  game_id: string;
  round: number;
  bet_index: number;
  small_blind: number;
  big_blind: number;
  orbits: number;
  dealer: number;
  community_cards: ICard[];
  current_buy_in: number;
  pot: number;
}

export interface IPlayer {
  name: string;
  /** Current Money */
  stack: number;
  status: string;
  bet: number;
  hole_cards?: ICard[];
  version: string;
  id: number;
}

export type CardRank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";
export type Suites = "spades" | "clubs" | "hearts" | "diamonds";

export interface ICard {
  rank: CardRank;
  suit: Suites;
}
