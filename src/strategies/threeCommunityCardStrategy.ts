import {
  CardRank,
  getCardIndex,
  getOwnHand,
  ICard,
  IGameState,
} from "../GameState";

export const isHandHammerGood = (gameState: IGameState) => {
  const handValue = getHandValue(getAllCards(gameState));

  switch (handValue) {
    case "straightFlush":
    case "fourOfAKind":
    case "fullHouse":
    case "flush":
    case "straight":
      return true;
  }
  return false;
};

const getAllCards = (gameState: IGameState) => {
  const hand = getOwnHand(gameState);
  const communityCards = gameState.community_cards;
  const allCards = [...hand, ...communityCards];
  return allCards;
};

export const getHandValue = (
  allCards: ICard[]
):
  | "straightFlush"
  | "fourOfAKind"
  | "fullHouse"
  | "flush"
  | "straight"
  | "threeOfAKind"
  | "twoPairs"
  | "pair"
  | "highCard" => {
  const ranksForAmount = getRanksForAmount(allCards);

  const isFlush = containsFlush(allCards);

  // TODO - detect straightFlush for 6 or more cards
  if (isFlush && containsStraight(allCards) && allCards.length === 5) {
    return "straightFlush";
  }

  if (Boolean(ranksForAmount[4])) {
    return "fourOfAKind";
  }

  if (ranksForAmount[3] && ranksForAmount[2]) {
    return "fullHouse";
  }

  if (isFlush) {
    return "flush";
  }

  if (containsStraight(allCards)) {
    return "straight";
  }

  if (Boolean(ranksForAmount[3])) {
    return "threeOfAKind";
  }

  if (ranksForAmount[2] && ranksForAmount[2].length >= 2) {
    return "twoPairs";
  }

  if (Boolean(ranksForAmount[2])) {
    return "pair";
  }

  return "highCard";
};

const containsFlush = (cards: ICard[]): boolean => {
  return (
    cards.filter((card) => card.suit === "spades").length >= 5 ||
    cards.filter((card) => card.suit === "clubs").length >= 5 ||
    cards.filter((card) => card.suit === "diamonds").length >= 5 ||
    cards.filter((card) => card.suit === "hearts").length >= 5
  );
};

const containsFourOfAKind = (ranksForAmount: {
  [amount: number]: CardRank[];
}): boolean => {
  return Boolean(ranksForAmount[4]);
};

const getRanksForAmount = (
  cards: ICard[]
): { [amount: number]: CardRank[] } => {
  const cardRankCount: { [key in CardRank]?: number } = {};
  cards.forEach((card) => {
    cardRankCount[card.rank] = (cardRankCount[card.rank] || 0) + 1;
  });

  const amountDictionary: { [amount in number]: CardRank[] } = {};
  Object.entries(cardRankCount).forEach(([rank, amount]) => {
    const cardRanks = amountDictionary[amount] || [];
    cardRanks.push(rank as CardRank);
    amountDictionary[amount] = cardRanks;
  });

  return amountDictionary;
};

const containsStraight = (cards: ICard[]): boolean => {
  const cardRankIndexes = cards.map((card) => getCardIndex(card.rank));
  const uniqueCardRankIndexes = Array.from(new Set(cardRankIndexes));
  uniqueCardRankIndexes.sort((a, b) => a > b ? 1: a < b ? -1: 0);
  let followingCards = 1;
  return Array.from(uniqueCardRankIndexes).some((cardIndex, i) => {
    if (i === 0) {
      return false;
    }
    const previousCardIndex = uniqueCardRankIndexes[i - 1];
    if (previousCardIndex === cardIndex - 1) {
      followingCards++;
    } else {
      followingCards = 1;
    }
    return followingCards === 5;
  });
};
