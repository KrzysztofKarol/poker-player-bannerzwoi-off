import { isSomeoneAllIn } from "./isSomeoneAllIn";

describe("isSomeoneAllIn", () => {
  it("works", () => {
    const someoneAlreadyAllIn = isSomeoneAllIn({
        "tournament_id": "61f0ffb52271950004bcf7db",
        "game_id": "61f15d82233ef10004b8c5fa",
        "round": 49,
        "players": [
            {
                "name": "SchroedingersCats",
                "stack": 0,
                "status": "out",
                "bet": 0,
                "hole_cards": [],
                "version": "Default TypeScript folding player test",
                "id": 0
            },
            {
                "name": "Robby Stone Face",
                "stack": 0,
                "status": "out",
                "bet": 0,
                "hole_cards": [],
                "version": "Robby Stone Face",
                "id": 1
            },
            {
                "name": "Wild Card",
                "stack": 0,
                "status": "out",
                "bet": 0,
                "hole_cards": [],
                "version": "0.1",
                "id": 2
            },
            {
                "name": "As Nas",
                "stack": 1891,
                "status": "active",
                "bet": 231,
                "hole_cards": [
                    {
                        "rank": "4",
                        "suit": "diamonds"
                    },
                    {
                        "rank": "A",
                        "suit": "diamonds"
                    }
                ],
                "version": "Default Python folding player",
                "id": 3
            },
            {
                "name": "Silvibot",
                "stack": 1647,
                "status": "active",
                "bet": 30,
                "hole_cards": [
                    {
                        "rank": "4",
                        "suit": "spades"
                    },
                    {
                        "rank": "10",
                        "suit": "clubs"
                    }
                ],
                "version": "2.4",
                "id": 4
            },
            {
                "name": "Bannerzwoi off",
                "stack": 1758,
                "status": "folded",
                "bet": 15,
                "hole_cards": [
                    {
                        "rank": "K",
                        "suit": "hearts"
                    },
                    {
                        "rank": "8",
                        "suit": "spades"
                    }
                ],
                "version": "BB SHS Logic",
                "id": 5
            },
            {
                "name": "Quick Maths",
                "stack": 542,
                "status": "active",
                "bet": 130,
                "hole_cards": [
                    {
                        "rank": "6",
                        "suit": "hearts"
                    },
                    {
                        "rank": "5",
                        "suit": "hearts"
                    }
                ],
                "version": "Quick Math: 14:37",
                "id": 6
            }
        ],
        "small_blind": 15,
        "big_blind": 30,
        "orbits": 7,
        "dealer": 4,
        "community_cards": [
            {
                "rank": "A",
                "suit": "clubs"
            },
            {
                "rank": "9",
                "suit": "clubs"
            },
            {
                "rank": "5",
                "suit": "clubs"
            }
        ],
        "current_buy_in": 231,
        "pot": 406
    });

    expect(someoneAlreadyAllIn).toBe(false)
  });

  it("works", () => {
    const someoneAlreadyAllIn = isSomeoneAllIn({
        "tournament_id": "61f0ffb52271950004bcf7db",
        "game_id": "61f15d82233ef10004b8c5fa",
        "round": 49,
        "players": [
            {
                "name": "SchroedingersCats",
                "stack": 0,
                "status": "out",
                "bet": 0,
                "hole_cards": [],
                "version": "Default TypeScript folding player test",
                "id": 0
            },
            {
                "name": "Robby Stone Face",
                "stack": 0,
                "status": "out",
                "bet": 0,
                "hole_cards": [],
                "version": "Robby Stone Face",
                "id": 1
            },
            {
                "name": "Wild Card",
                "stack": 0,
                "status": "out",
                "bet": 0,
                "hole_cards": [],
                "version": "0.1",
                "id": 2
            },
            {
                "name": "As Nas",
                "stack": 1630,
                "status": "active",
                "bet": 492,
                "hole_cards": [
                    {
                        "rank": "4",
                        "suit": "diamonds"
                    },
                    {
                        "rank": "A",
                        "suit": "diamonds"
                    }
                ],
                "version": "Default Python folding player",
                "id": 3
            },
            {
                "name": "Silvibot",
                "stack": 1647,
                "status": "folded",
                "bet": 30,
                "hole_cards": [
                    {
                        "rank": "4",
                        "suit": "spades"
                    },
                    {
                        "rank": "10",
                        "suit": "clubs"
                    }
                ],
                "version": "2.4",
                "id": 4
            },
            {
                "name": "Bannerzwoi off",
                "stack": 1758,
                "status": "folded",
                "bet": 15,
                "hole_cards": [
                    {
                        "rank": "K",
                        "suit": "hearts"
                    },
                    {
                        "rank": "8",
                        "suit": "spades"
                    }
                ],
                "version": "BB SHS Logic",
                "id": 5
            },
            {
                "name": "Quick Maths",
                "stack": 0,
                "status": "active",
                "bet": 672,
                "hole_cards": [
                    {
                        "rank": "6",
                        "suit": "hearts"
                    },
                    {
                        "rank": "5",
                        "suit": "hearts"
                    }
                ],
                "version": "Quick Math: 14:37",
                "id": 6
            }
        ],
        "small_blind": 15,
        "big_blind": 30,
        "orbits": 7,
        "dealer": 4,
        "community_cards": [
            {
                "rank": "A",
                "suit": "clubs"
            },
            {
                "rank": "9",
                "suit": "clubs"
            },
            {
                "rank": "5",
                "suit": "clubs"
            }
        ],
        "current_buy_in": 672,
        "pot": 1209
    });

    expect(someoneAlreadyAllIn).toBe(true)
  });
});
