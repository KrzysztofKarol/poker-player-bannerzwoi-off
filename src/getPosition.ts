import { getOwnState, IGameState } from "./GameState";

const allPositions = [
  "UTG", // not used
  "UTG+1", // not used
  "MP",
  "MP+1",
  "HJ",
  "CO",
  "BTN",
  "SB",
  "BB",
] as const;

type Position = typeof allPositions[number];

export const getOurPosition = (gameState: IGameState): Position => {
  const { players, dealer: dealerId } = gameState;

  const activePlayers = players.filter((player) => player.stack > 0);

  const dealerIndex = activePlayers.findIndex(
    (player) => player.id === dealerId
  );

  const ourId = getOwnState(gameState).id;
  const ourIndex = activePlayers.findIndex((player) => player.id === ourId);

  const diff = ourIndex - dealerIndex;

  const positions = getPositionsForLessPlayers(activePlayers.length);

  const btnPosition = positions.findIndex((value) => value === "BTN");

  return positions[(btnPosition + diff) % positions.length];
};

export const getPositionsForLessPlayers = (playersNum: number) =>
  allPositions.slice(allPositions.length - playersNum);
