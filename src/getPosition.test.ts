import { getOurPosition, getPositionsForLessPlayers } from "./getPosition";
import { IGameState } from "./GameState";

describe("getPositionsForLessPlayers", () => {
  it("works for 7", () => {
    const positions = getPositionsForLessPlayers(7);

    expect(positions).toEqual(["MP", "MP+1", "HJ", "CO", "BTN", "SB", "BB"]);
  });

  it("works for 2", () => {
    const positions = getPositionsForLessPlayers(2);

    expect(positions).toEqual(["SB", "BB"]);
  });
});

describe("getPosition", () => {
  it("works - begginig", () => {
    // https://live.leanpoker.org/tournament/61f0ffb52271950004bcf7db/game/61f113d0233ef10004b8c39d/step/1
    const gameState = {
      tournament_id: "61f0ffb52271950004bcf7db",
      game_id: "61f113d0233ef10004b8c39d",
      round: 0,
      players: [
        {
          name: "SchroedingersCats",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "Default TypeScript folding player test",
          id: 0,
        },
        {
          name: "Robby Stone Face",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "Robby Stone Face",
          id: 1,
        },
        {
          name: "Wild Card",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "0.1",
          id: 2,
        },
        {
          name: "As Nas",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "Default Python folding player",
          id: 3,
        },
        {
          name: "Silvibot",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "0.1",
          id: 4,
        },
        {
          name: "Bannerzwoi off",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "Default TypeScript folding player",
          id: 5,
        },
        {
          name: "Quick Maths",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "Default TypeScript folding player",
          id: 6,
        },
      ],
      small_blind: 2,
      big_blind: 4,
      orbits: 0,
      dealer: 2,
      community_cards: [],
      current_buy_in: 0,
      pot: 0,
    };

    const position = getOurPosition(gameState);

    expect(position).toBe("MP");
  });

  it("works - middle", () => {
    const position = getOurPosition({
      tournament_id: "61f0ffb52271950004bcf7db",
      game_id: "61f157ed233ef10004b8c591",
      round: 17,
      players: [
        {
          name: "SchroedingersCats",
          stack: 1079,
          status: "active",
          bet: 6,
          hole_cards: [
            {
              rank: "K",
              suit: "diamonds",
            },
            {
              rank: "9",
              suit: "spades",
            },
          ],
          version: "Default TypeScript folding player test",
          id: 0,
        },
        {
          name: "Robby Stone Face",
          stack: 3,
          status: "active",
          bet: 0,
          hole_cards: [
            {
              rank: "6",
              suit: "spades",
            },
            {
              rank: "Q",
              suit: "clubs",
            },
          ],
          version: "Robby Stone Face",
          id: 1,
        },
        {
          name: "Wild Card",
          stack: 0,
          status: "out",
          bet: 0,
          hole_cards: [],
          version: "0.1",
          id: 2,
        },
        {
          name: "As Nas",
          stack: 502,
          status: "active",
          bet: 0,
          hole_cards: [
            {
              rank: "10",
              suit: "spades",
            },
            {
              rank: "2",
              suit: "diamonds",
            },
          ],
          version: "Default Python folding player",
          id: 3,
        },
        {
          name: "Silvibot",
          stack: 561,
          status: "active",
          bet: 0,
          hole_cards: [
            {
              rank: "6",
              suit: "hearts",
            },
            {
              rank: "5",
              suit: "diamonds",
            },
          ],
          version: "2.4",
          id: 4,
        },
        {
          name: "Bannerzwoi off",
          stack: 976,
          status: "active",
          bet: 3,
          hole_cards: [
            {
              rank: "10",
              suit: "hearts",
            },
            {
              rank: "Q",
              suit: "diamonds",
            },
          ],
          version: "BB SHS Logic",
          id: 5,
        },
        {
          name: "Quick Maths",
          stack: 2864,
          status: "active",
          bet: 6,
          hole_cards: [
            {
              rank: "9",
              suit: "diamonds",
            },
            {
              rank: "3",
              suit: "hearts",
            },
          ],
          version: "Quick Math: 14:4",
          id: 6,
        },
      ],
      small_blind: 3,
      big_blind: 6,
      orbits: 2,
      dealer: 4,
      community_cards: [],
      current_buy_in: 6,
      pot: 15,
    });

    expect(position).toBe("SB");
  });

  it.skip("works - end", () => {
    const gameState = {
      tournament_id: "61f0ffb52271950004bcf7db",
      game_id: "61f1595e233ef10004b8c5ac",
      round: 123,
      players: [
        {
          name: "SchroedingersCats",
          stack: 0,
          status: "out",
          bet: 0,
          hole_cards: [],
          version: "Default TypeScript folding player test",
          id: 0,
        },
        {
          name: "Robby Stone Face",
          stack: 0,
          status: "out",
          bet: 0,
          hole_cards: [],
          version: "Robby Stone Face",
          id: 1,
        },
        {
          name: "Wild Card",
          stack: 0,
          status: "out",
          bet: 0,
          hole_cards: [],
          version: "0.1",
          id: 2,
        },
        {
          name: "As Nas",
          stack: 0,
          status: "out",
          bet: 0,
          hole_cards: [],
          version: "Default Python folding player",
          id: 3,
        },
        {
          name: "Silvibot",
          stack: 0,
          status: "out",
          bet: 0,
          hole_cards: [],
          version: "2.4",
          id: 4,
        },
        {
          name: "Bannerzwoi off",
          stack: 4406,
          status: "active",
          bet: 400,
          hole_cards: [
            {
              rank: "6",
              suit: "spades",
            },
            {
              rank: "7",
              suit: "spades",
            },
          ],
          version: "BB SHS Logic",
          id: 5,
        },
        {
          name: "Quick Maths",
          stack: 1000,
          status: "folded",
          bet: 200,
          hole_cards: [
            {
              rank: "5",
              suit: "spades",
            },
            {
              rank: "8",
              suit: "clubs",
            },
          ],
          version: "Quick Math: 14:4",
          id: 6,
        },
      ],
      small_blind: 200,
      big_blind: 400,
      orbits: 17,
      dealer: 5,
      community_cards: [
        {
          rank: "4",
          suit: "diamonds",
        },
      ],
      current_buy_in: 400,
      pot: 600,
    };

    const position = getOurPosition(gameState as IGameState);

    expect(position).toBe("BTN");
  });
});
