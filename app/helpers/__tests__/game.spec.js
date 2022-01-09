import { getPlayingOrders } from '../game';


/* global describe, expect, it */

describe('playing order calculation', () => {
  const hole1 = { par: 3, holenumber: 1 };
  const hole2 = { par: 3, holenumber: 2 };
  const hole3 = { par: 3, holenumber: 3 };

  const player1 = { id: 1 };
  const player2 = { id: 2 };

  it('single player', () => {
    const game = {
      players: [player1],
      course: {
        holes: [hole1, hole2, hole3],
      },
      scores: [
        { player: player1, score: 4, hole: hole1 },
        { player: player1, score: 2, hole: hole2 },
        { player: player1, score: 3, hole: hole3 }
      ]
    };

    const expected = {
      1: { 1: 1 },
      2: { 1: 1 },
      3: { 1: 1 }
    };

    expect(getPlayingOrders(game)).toEqual(expected);
  });

  it('multiple players', () => {
    const game = {
      players: [player1, player2],
      course: {
        holes: [hole1, hole2, hole3],
      },
      scores: [
        { player: player1, score: 3, hole: hole1 },
        { player: player1, score: 3, hole: hole2 },
        { player: player1, score: 3, hole: hole3 },
        { player: player2, score: 2, hole: hole1 },
        { player: player2, score: 4, hole: hole2 },
        { player: player2, score: 3, hole: hole3 }
      ]
    };

    const expected = {
      1: { 1: 1, 2: 2 },
      2: { 1: 2, 2: 1 },
      3: { 1: 1, 2: 2 }
    };

    expect(getPlayingOrders(game)).toEqual(expected);
  });

  it('same order after tie', () => {
    const game = {
      players: [player1, player2],
      course: {
        holes: [hole1, hole2, hole3],
      },
      scores: [
        { player: player1, score: 3, hole: hole1 },
        { player: player1, score: 3, hole: hole2 },
        { player: player1, score: 3, hole: hole3 },
        { player: player2, score: 2, hole: hole1 },
        { player: player2, score: 3, hole: hole2 },
        { player: player2, score: 3, hole: hole3 }
      ]
    };

    const expected = {
      1: { 1: 1, 2: 2 },
      2: { 1: 2, 2: 1 },
      3: { 1: 2, 2: 1 }
    };

    expect(getPlayingOrders(game)).toEqual(expected);
  });
});
