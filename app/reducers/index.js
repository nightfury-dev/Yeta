import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import players from './players';
import courses from './courses';
import games from './games';
import currentGame from './currentGame';


const rootReducer = combineReducers({
    players,
    courses,
    games,
    currentGame,
    routing: routerReducer
});

export default rootReducer;
