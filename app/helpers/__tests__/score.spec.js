import { calculateScores } from '../score';


/* global describe, expect, it */

describe('score calculation', () => {
  const player1 = { id: 1 };
  const player2 = { id: 2 };
  const player3 = { id: 3 };

  it('even score', () => {
    const par = 9;
    const scores = [
      { player: player1, score: 3 },
      { player: player1, score: 3 },
      { player: player1, score: 3 },
    ];

    const expected = { 1: 0 };

    expect(calculateScores(scores, par)).toEqual(expected);
  });

  it('under par score', () => {
    const par = 9;
    const scores = [
      { player: player1, score: 2 },
      { player: player1, score: 3 },
      { player: player1, score: 3 },
    ];

    const expected = { 1: -1 };

    expect(calculateScores(scores, par)).toEqual(expected);
  });

  it('over par score', () => {
    const par = 9;
    const scores = [
      { player: player1, score: 4 },
      { player: player1, score: 3 },
      { player: player1, score: 3 },
    ];

    const expected = { 1: '+1' };

    expect(calculateScores(scores, par)).toEqual(expected);
  });

  it('multiple players', () => {
    const par = 7;
    const scores = [
      { player: player1, score: 5 },
      { player: player1, score: 4 },

      { player: player2, score: 4 },
      { player: player2, score: 2 },

      { player: player3, score: 5 },
      { player: player3, score: 2 }
    ];

    const expected = { 1: '+2', 2: -1, 3: 0 };

    expect(calculateScores(scores, par)).toEqual(expected);
  });
});
