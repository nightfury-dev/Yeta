import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers/index';
import { getPlayers } from './data/players';
import { getCourses } from './data/courses';
import games from './data/games';


const defaultState = {
    players: getPlayers(),
    courses: getCourses(),
    games
};

const store = createStore(rootReducer, defaultState);

export default store;
