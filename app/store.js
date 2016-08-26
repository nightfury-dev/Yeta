import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import { getPlayers } from './data/players';
import { getCourses } from './data/courses';
import { getGames } from './data/games';


const defaultState = {
    players: getPlayers(),
    courses: getCourses(),
    games: getGames()
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
