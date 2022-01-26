export interface IGameState {
  players: IPlayer[];
  tournament_id: string;
  game_id: string;
  round: number;
  bet_index?: number;
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

const sortedRanks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

export const getCardIndex = (rank: CardRank) => sortedRanks.indexOf(rank);

export const getOwnHand = (gameState: IGameState): ICard[] => {
  const ownState = getOwnState(gameState);
  return ownState.hole_cards || [];
};

export const getOwnState = (gameState: IGameState): IPlayer => {
  const ourName = "Bannerzwoi off";
  const player = gameState.players.find((player) => player.name === ourName);
  if (!player) {
    throw new Error("Player not found");
  }
  return player;
};

export const getCheckAmount = (gameState: IGameState): number => {
  const playerState = getOwnState(gameState);
  console.log("🤨 okayish hand - lets check");
  return getCurrentHighestBet(gameState) - playerState.bet;
};

export const getCurrentHighestBet = (gameState: IGameState): number => {
  const playerBets = gameState.players.map((player) => player.bet || 0);
  return Math.max(...playerBets);
};
