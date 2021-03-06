import Player from "./Player";

describe("Player", () => {
  it("bets all in for > 80%", async () => {
    const player = new Player();
    const bet = await player.betRequest({
      players: [
        {
          name: "Player 1",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "Version name 1",
          id: 0,
        },
        {
          name: "Bannerzwoi off",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [
            {
              suit: "clubs",
              rank: "A",
            },
            {
              suit: "hearts",
              rank: "A",
            },
          ],
          version: "Version name 2",
          id: 1,
        },
      ],
      tournament_id: "550d1d68cd7bd10003000003",
      game_id: "550da1cb2d909006e90004b1",
      round: 0,
      bet_index: 0,
      small_blind: 10,
      big_blind: 10,
      orbits: 0,
      dealer: 0,
      community_cards: [],
      current_buy_in: 0,
      pot: 0,
    });

    expect({ bet }).toMatchInlineSnapshot(`
      Object {
        "bet": 666666,
      }
    `);
  });

  it("bets all in for > 50%", async () => {
    const player = new Player();
    const bet = await player.betRequest({
      players: [
        {
          name: "Player 1",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [],
          version: "Version name 1",
          id: 0,
        },
        {
          name: "Bannerzwoi off",
          stack: 1000,
          status: "active",
          bet: 0,
          hole_cards: [
            {
              suit: "clubs",
              rank: "2",
            },
            {
              suit: "clubs",
              rank: "3",
            },
          ],
          version: "Version name 2",
          id: 1,
        },
      ],
      tournament_id: "550d1d68cd7bd10003000003",
      game_id: "550da1cb2d909006e90004b1",
      round: 0,
      bet_index: 0,
      small_blind: 10,
      big_blind: 10,
      orbits: 0,
      dealer: 0,
      community_cards: [],
      current_buy_in: 0,
      pot: 0,
    });
    expect({ bet }).toMatchInlineSnapshot(
      `
      Object {
        "bet": 0,
      }
    `
    );
  });
});
