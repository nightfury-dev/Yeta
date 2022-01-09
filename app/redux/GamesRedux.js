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
  gamesFetched: ['games'],
  changeCurrentGame: ['game'],
  gamesUpdated: ['games']
});

export const GamesTypes = Types;
export default Creators;

// -- initial state for games

const INITIAL_STATE = {
  list: [],
  creating: false,
  current: null
};

// -- reducers

const requestAdd = (state = INITIAL_STATE) => ({
  ...state,
  current: null,
  creating: true
});

const add = (state = INITIAL_STATE, { game }) => ({
  ...state,
  creating: false,
  current: game,
  list: [...state.list, game]
});

const remove = (state = INITIAL_STATE, { id }) => {
  const index = _.findIndex(state.list, (game) => game.id === id);
  return {
    ...state,
    list: [...state.list.slice(0, index), ...state.list.slice(index + 1)]
  };
};

const update = (state = INITIAL_STATE, { game }) => {
  const index = _.findIndex(state.list, (g) => g.id === game.id);
  return {
    ...state,
    current: game,
    list: [...state.list.slice(0, index), game, ...state.list.slice(index + 1)]
  };
};

const fetchSuccess = (state = INITIAL_STATE, { games }) => ({
  ...state,
  list: [...state.list, ...games]
});

const changeCurrentGame = (state = INITIAL_STATE, { game }) => ({
  ...state,
  current: game
});

const updateGames = (state = INITIAL_STATE, { games }) => {
  let current = null;

  if (state.current) {
    current = _.values(games).find((game) => game.id === state.current.id);
  }

  return {
    ...state,
    list: games,
    current
  };
};

// -- tie up the reducers to action types

const HANDLERS = {
  [Types.ADD_GAME]: requestAdd,
  [Types.GAME_ADDED]: add,
  [Types.HOLE_UPDATED]: update,
  [Types.SCORE_UPDATED]: update,
  [Types.GAME_REMOVED]: remove,
  [Types.GAMES_FETCHED]: fetchSuccess,
  [Types.CHANGE_CURRENT_GAME]: changeCurrentGame,
  [Types.GAMES_UPDATED]: updateGames
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
