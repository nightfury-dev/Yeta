import { combineReducers } from 'redux';

import players from './players';
import courses from './courses';
import games from './games';
import currentGame from './currentGame';
import UI from './UI';


const rootReducer = combineReducers({
  players,
  courses,
  games,
  currentGame,
  UI
});

export default rootReducer;
