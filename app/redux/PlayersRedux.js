import * as _ from 'lodash';
import { createActions, createReducer } from 'reduxsauce';


const { Types, Creators } = createActions({
  addPlayer: ['name'],
  removePlayer: ['id'],
  playerAdded: ['player'],
  playerRemoved: ['id'],
  playersFetched: ['players'],
  fetchPlayers: null
});

export const PlayersTypes = Types;
export default Creators;

// -- initial state for players

const INITIAL_STATE = [];

// -- reducers

const add = (state = INITIAL_STATE, { player }) => {
  return [...state, player];
};

const remove = (state = INITIAL_STATE, action) => {
  const index = _.findIndex(state, (p) => p.id === action.id);
  return [...state.slice(0, index), ...state.slice(index + 1)];
};

const fetchSuccess = (state = INITIAL_STATE, { players }) =>
  [...state, ...players];

// -- tie up the reducers to action types

const HANDLERS = {
  [Types.PLAYER_ADDED]: add,
  [Types.PLAYER_REMOVED]: remove,
  [Types.PLAYERS_FETCHED]: fetchSuccess
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
