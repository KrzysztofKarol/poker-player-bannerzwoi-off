export class Player {
  public async betRequest(gameState: IGameState): Promise<number> {
    const hands = this.getOwnHand(gameState);
    const startHandScore = this.getStartingHandScore(hands);
    // Go all in on invalid card amount
    if (hands.length < 2) {
      return 10000;
    }

    if (startHandScore > 0.5) {
      return 10000;
    }
    return 0;
  }

  public showdown(gameState: IGameState): void {

  }

  public getOwnHand(gameState: IGameState): ICard[] {
    const firstPlayerWithCards = gameState.players.find((player) => player.hole_cards && player.hole_cards.length > 0);
    return firstPlayerWithCards ? firstPlayerWithCards.hole_cards: []
  }

  public getStartingHandScore(cards: ICard[]) {
    if (cards.length < 2) {
      return 0;
    }
    return startingHandOds[cards[0].rank][cards[1].rank];
  }
};

const startingHandOds: { [key in CardRank]: { [key in CardRank]: number } } = {
  "A": {
    "A": 0.85,
    "K": 0.68,
    "Q": 0.67,
    "J": 0.66,
    "10": 0.66,
    "9": 0.64,
    "8": 0.63,
    "7": 0.63,
    "6": 0.62,
    "5": 0.62,
    "4": 0.61,
    "3": 0.6,
    "2": 0.59
  },
  "K": {
    "A": .68,
    "K": .83,
    "Q": .64,
    "J": .64,
    "10": .63,
    "9": .61,
    "8": .6,
    "7": .59,
    "6": .58,
    "5": .58,
    "4": .57,
    "3": .56,
    "2": .55
  },
  "Q": {
    "A": 0.65,
    "K": 0.62,
    "Q": 0.80,
    "J": 0.61,
    "10": 0.61,
    "9": 0.59,
    "8": 0.58,
    "7": 0.56,
    "6": 0.55,
    "5": 0.55,
    "4": 0.54,
    "3": 0.53,
    "2": 0.52,
  },
  "J": {
    "A": 0.65,
    "K": 0.62,
    "Q": 0.59,
    "J": 0.78,
    "10": 0.59,
    "9": 0.57,
    "8": 0.56,
    "7": 0.54,
    "6": 0.53,
    "5": 0.52,
    "4": 0.51,
    "3": 0.50,
    "2": 0.50,
  },
  "10": {
    "A": .64,
    "K": .61,
    "Q": .59,
    "J": .57,
    "10": .75,
    "9": .56,
    "8": .54,
    "7": .53,
    "6": .51,
    "5": .49,
    "4": .49,
    "3": .48,
    "2": .47
  },
  "9": {
    "A": .62,
    "K": .59,
    "Q": .57,
    "J": .55,
    "10": .53,
    "9": .72,
    "8": .53,
    "7": .51,
    "6": .50,
    "5": .48,
    "4": .46,
    "3": .46,
    "2": .45
  },
  "8": {
    "A": .61,
    "K": .58,
    "Q": .55,
    "J": .53,
    "10": .52,
    "9": .50,
    "8": .69,
    "7": .50,
    "6": .49,
    "5": .47,
    "4": .45,
    "3": .43,
    "2": .43
  },
  "7": {
    "A": 0.60,
    "K": 0.57,
    "Q": 0.54,
    "J": 0.52,
    "10": 0.50,
    "9": 0.48,
    "8": 0.47,
    "7": 0.67,
    "6": 0.48,
    "5": 0.46,
    "4": 0.45,
    "3": 0.43,
    "2": 0.41,
  },
  "6": {
    "A": .59,
    "K": .56,
    "Q": .53,
    "J": .50,
    "10": .48,
    "9": .47,
    "8": .46,
    "7": .45,
    "6": .64,
    "5": .46,
    "4": .44,
    "3": .42,
    "2": .40
  },
  "5": {
    "A": .60,
    "K": .55,
    "Q": .52,
    "J": .49,
    "10": .47,
    "9": .45,
    "8": .44,
    "7": .43,
    "6": .43,
    "5": .61,
    "4": .44,
    "3": .43,
    "2": .41
  },
  "4": {
    "A": 0.59,
    "K": 0.54,
    "Q": 0.51,
    "J": 0.48,
    "10": 0.46,
    "9": 0.43,
    "8": 0.42,
    "7": 0.41,
    "6": 0.41,
    "5": 0.41,
    "4": 0.58,
    "3": 0.42,
    "2": 0.40,
  },
  "3": {
    "A": 0.58,
    "K": 0.54,
    "Q": 0.50,
    "J": 0.48,
    "10": 0.45,
    "9": 0.43,
    "8": 0.4,
    "7": 0.39,
    "6": 0.39,
    "5": 0.39,
    "4": 0.38,
    "3": 0.55,
    "2": 0.39
  },
  "2": {
    "A": .57,
    "K": .53,
    "Q": .49,
    "J": .47,
    "10": .44,
    "9": .42,
    "8": .40,
    "7": .37,
    "6": .37,
    "5": .37,
    "4": .36,
    "3": .35,
    "2": .51
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
  orbits: number;
  dealer: number;
  community_cards: ICard[];
  current_buy_in: number;
  pot: number;
}

export interface IPlayer {
  name: string;
  stack: number;
  status: string;
  bet: number;
  hole_cards?: ICard[];
  version: string;
  id: number;
}

type CardRank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
type Suites = "spades" | "clubs" | "hearts" | "diamonds"

export interface ICard {
  "rank": CardRank,
  "suit": Suites
}