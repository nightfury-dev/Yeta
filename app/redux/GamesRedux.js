import * as _ from 'lodash';
import { createActions, createReducer } from 'reduxsauce';


const { Types, Creators } = createActions({
  addGame: ['courseId', 'playerIds'],
  gameAdded: ['game'],
  updateHole: ['gameId', 'hole'],
  holeUpdated: ['game'],
  updateScore: ['gameId', 'score', 'newScore'],
  scoreUpdated: ['game'],
  removeGame: ['game'],
  gameRemoved: ['gameId'],
  fetchGames: null,
  gamesFetched: ['games']
});

export const GamesTypes = Types;
export default Creators;

// -- initial state for players

const INITIAL_STATE = [];

// -- reducers

const add = (state = INITIAL_STATE, { game }) => [...state, game];

const remove = (state = INITIAL_STATE, { id }) => {
  const index = _.findIndex(state, (game) => game.id === id);
  return [...state.slice(0, index), ...state.slice(index + 1)];
};

const update = (state = INITIAL_STATE, { game }) => {
  const index = _.findIndex(state, (g) => g.id === game.id);
  return [...state.slice(0, index), game, ...state.slice(index + 1)];
};

const fetchSuccess = (state = INITIAL_STATE, { games }) =>
  [...state, ...games];

// -- tie up the reducers to action types

const HANDLERS = {
  [Types.GAME_ADDED]: add,
  [Types.HOLE_UPDATED]: update,
  [Types.SCORE_UPDATED]: update,
  [Types.GAME_REMOVED]: remove,
  [Types.GAMES_FETCHED]: fetchSuccess
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
