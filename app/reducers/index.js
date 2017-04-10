import { combineReducers } from 'redux';

import players from './players';
import courses from './courses';
import games from './games';
import currentGame from './currentGame';


const rootReducer = combineReducers({
  players,
  courses,
  games,
  currentGame
});

export default rootReducer;
