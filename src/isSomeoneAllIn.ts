import {IGameState} from "./GameState"

export const isSomeoneAllIn = (gameState: IGameState) =>
  gameState.players.some(
    (player) => player.stack === 0 && player.bet > 0
  );
