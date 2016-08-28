import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import RealmPlayer from './data/players';
import RealmCourse from './data/courses';
import { getGames } from './data/games';


const realmPlayer = new RealmPlayer();
const realmCourse = new RealmCourse();

const defaultState = {
    players: realmPlayer.getPlayers(),
    courses: realmCourse.getCourses(),
    games: getGames()
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
