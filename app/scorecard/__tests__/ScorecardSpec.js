import * as _ from 'lodash';
import 'react-native';
import React from 'react';

/* eslint import/no-extraneous-dependencies: 0 */
import renderer from 'react-test-renderer';

import { Scorecard } from '../Scorecard';

const gameWithoutScores = {
  id: 1,
  timeBegin: '2016-12-21T17:44:01.251Z',
  players: [
    {
      id: 1,
      name: 'keijo'
    },
    {
      id: 2,
      name: 'Pertti'
    }
  ],
  course: {
    id: 1,
    name: 'Lyhyt rata',
    holes: [
      {
        id: 1,
        holenumber: 1,
        par: 5
      },
      {
        id: 2,
        holenumber: 2,
        par: 5
      }
    ]
  },
  currentHole: 1
};

const scoresEvenPar = [
  {
    id: 1,
    hole: {
      id: 1,
      holenumber: 1,
      par: 5
    },
    player: {
      id: 1,
      name: 'keijo'
    },
    score: 5
  },
  {
    id: 2,
    hole: {
      id: 2,
      holenumber: 2,
      par: 5
    },
    player: {
      id: 1,
      name: 'keijo'
    },
    score: 5
  },
  {
    id: 4,
    hole: {
      id: 1,
      holenumber: 1,
      par: 5
    },
    player: {
      id: 2,
      name: 'Pertti'
    },
    score: 5
  },
  {
    id: 5,
    hole: {
      id: 2,
      holenumber: 2,
      par: 5
    },
    player: {
      id: 2,
      name: 'Pertti'
    },
    score: 5
  }
];

const scoresUnderPar = [
  {
    id: 1,
    hole: {
      id: 1,
      holenumber: 1,
      par: 5
    },
    player: {
      id: 1,
      name: 'keijo'
    },
    score: 4
  },
  {
    id: 2,
    hole: {
      id: 2,
      holenumber: 2,
      par: 5
    },
    player: {
      id: 1,
      name: 'keijo'
    },
    score: 5
  },
  {
    id: 4,
    hole: {
      id: 1,
      holenumber: 1,
      par: 5
    },
    player: {
      id: 2,
      name: 'Pertti'
    },
    score: 5
  },
  {
    id: 5,
    hole: {
      id: 2,
      holenumber: 2,
      par: 5
    },
    player: {
      id: 2,
      name: 'Pertti'
    },
    score: 5
  }
];

const scoresOverPar = [
  {
    id: 1,
    hole: {
      id: 1,
      holenumber: 1,
      par: 5
    },
    player: {
      id: 1,
      name: 'keijo'
    },
    score: 6
  },
  {
    id: 2,
    hole: {
      id: 2,
      holenumber: 2,
      par: 5
    },
    player: {
      id: 1,
      name: 'keijo'
    },
    score: 5
  },
  {
    id: 4,
    hole: {
      id: 1,
      holenumber: 1,
      par: 5
    },
    player: {
      id: 2,
      name: 'Pertti'
    },
    score: 5
  },
  {
    id: 5,
    hole: {
      id: 2,
      holenumber: 2,
      par: 5
    },
    player: {
      id: 2,
      name: 'Pertti'
    },
    score: 5
  }
];


xdescribe('Scorecard renders correctly', () => {
  test('Even par', () => {
    const gameEvenScores = _.cloneDeep(gameWithoutScores);
    gameEvenScores.scores = scoresEvenPar;
    const tree = renderer.create(
      <Scorecard game={gameEvenScores} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Under par', () => {
    const gameUnderPar = _.cloneDeep(gameWithoutScores);
    gameUnderPar.scores = scoresUnderPar;
    const tree = renderer.create(
      <Scorecard game={gameUnderPar} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Over par', () => {
    const gameOverPar = _.cloneDeep(gameWithoutScores);
    gameOverPar.scores = scoresOverPar;
    const tree = renderer.create(
      <Scorecard game={gameOverPar} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
