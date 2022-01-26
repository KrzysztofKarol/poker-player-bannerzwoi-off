import { getOwnState, IGameState } from "./GameState";

export const getRelativeStack = (gameState: IGameState) => {
    const playerState = getOwnState(gameState);

    const ourStack = playerState.stack

    const stacks = gameState.players.map(player => player.stack);
    
    

}

