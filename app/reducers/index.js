import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import players from './players';
import courses from './courses';
import games from './games';


const rootReducer = combineReducers({
    players,
    courses,
    games,
    routing: routerReducer
});

export default rootReducer;
