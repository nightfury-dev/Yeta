import * as _ from 'lodash';
import { createActions, createReducer } from 'reduxsauce';


const { Types, Creators } = createActions({
  changeCurrentGame: ['game']
});

export const GamesTypes = Types;
export default Creators;

// -- initial state for players

const INITIAL_STATE = {
  game: null
};

// -- reducers

const change = (state = INITIAL_STATE, { game }) => ({
  ...state,
  game
});

// -- tie up the reducers to action types

const HANDLERS = {
  [Types.CHANGE_CURRENT_GAME]: change
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
