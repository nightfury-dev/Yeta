import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import RealmPlayer from './data/players';
import { getCourses } from './data/courses';
import { getGames } from './data/games';


const realmPlayer = new RealmPlayer();

const defaultState = {
    players: realmPlayer.getPlayers(),
    courses: getCourses(),
    games: getGames()
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
