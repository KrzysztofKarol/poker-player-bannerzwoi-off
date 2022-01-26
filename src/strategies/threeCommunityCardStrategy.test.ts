import { getHandValue } from "./threeCommunityCardStrategy";

describe("getHandValue", () => {
  it("should find a straightFlush", async () => {
    expect(
      getHandValue([
        { rank: "3", suit: "hearts" },
        { rank: "4", suit: "hearts" },
        { rank: "5", suit: "hearts" },
        { rank: "6", suit: "hearts" },
        { rank: "7", suit: "hearts" },
      ])
    ).toEqual("straightFlush");
  });

  it("has a flush and a straight, but not on the same cards, so no straight flush", async () => {
    expect(
      getHandValue([
        { rank: "3", suit: "hearts" },
        { rank: "4", suit: "hearts" },
        { rank: "5", suit: "hearts" },
        { rank: "6", suit: "hearts" },
        { rank: "7", suit: "diamonds" },
        { rank: "J", suit: "hearts" },
      ])
    ).not.toEqual("straightFlush");
  });

  it("should find a flush", async () => {
    expect(
      getHandValue([
        { rank: "A", suit: "clubs" },
        { rank: "A", suit: "clubs" },
        { rank: "A", suit: "clubs" },
        { rank: "6", suit: "clubs" },
        { rank: "7", suit: "diamonds" },
        { rank: "J", suit: "clubs" },
      ])
    ).toEqual("flush");
  });

  it("should not find a flush, due to fourOfAKind", async () => {
    expect(
      getHandValue([
        { rank: "A", suit: "hearts" },
        { rank: "A", suit: "diamonds" },
        { rank: "A", suit: "spades" },
        { rank: "6", suit: "hearts" },
        { rank: "A", suit: "clubs" },
        { rank: "J", suit: "hearts" },
      ])
    ).not.toEqual("flush");
  });

  it.only("should find a straight", async () => {
    expect(
      getHandValue([
        { rank: "A", suit: "spades" },
        { rank: "J", suit: "hearts" },
        { rank: "Q", suit: "diamonds" },
        { rank: "10", suit: "clubs" },
        { rank: "2", suit: "diamonds" },
        { rank: "K", suit: "clubs" },
      ])
    ).toEqual("straight");
  });

  it("should not find a straight, due to being a Flush", async () => {
    expect(
      getHandValue([
        { rank: "A", suit: "diamonds" },
        { rank: "J", suit: "hearts" },
        { rank: "Q", suit: "diamonds" },
        { rank: "10", suit: "diamonds" },
        { rank: "2", suit: "diamonds" },
        { rank: "K", suit: "diamonds" },
      ])
    ).toEqual("flush");
  });

  it("should find a fourOfAKind", async () => {
    expect(
      getHandValue([
        { rank: "Q", suit: "diamonds" },
        { rank: "J", suit: "hearts" },
        { rank: "Q", suit: "hearts" },
        { rank: "10", suit: "diamonds" },
        { rank: "Q", suit: "clubs" },
        { rank: "Q", suit: "spades" },
      ])
    ).toEqual("fourOfAKind");
  });

  it("should not find a fourOfAKind, due to being a threeOfAKind", async () => {
    expect(
      getHandValue([
        { rank: "A", suit: "diamonds" },
        { rank: "J", suit: "hearts" },
        { rank: "Q", suit: "hearts" },
        { rank: "10", suit: "diamonds" },
        { rank: "Q", suit: "clubs" },
        { rank: "Q", suit: "spades" },
      ])
    ).not.toEqual("fourOfAKind");
  });

  it("should find a fullHouse", async () => {
    expect(
      getHandValue([
        { rank: "A", suit: "diamonds" },
        { rank: "2", suit: "hearts" },
        { rank: "4", suit: "hearts" },
        { rank: "4", suit: "diamonds" },
        { rank: "A", suit: "clubs" },
        { rank: "A", suit: "spades" },
      ])
    ).toEqual("fullHouse");
  });

  it("should not find a fullHouse, due to being a twoPairs", async () => {
    expect(
      getHandValue([
        { rank: "A", suit: "diamonds" },
        { rank: "2", suit: "hearts" },
        { rank: "4", suit: "hearts" },
        { rank: "4", suit: "diamonds" },
        { rank: "Q", suit: "clubs" },
        { rank: "A", suit: "spades" },
      ])
    ).not.toEqual("fullHouse");
  });

});
