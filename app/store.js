import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import players from './data/players';
import courses from './data/courses';
import games from './data/games';


const defaultState = {
    players,
    courses,
    games
};

const store = createStore(rootReducer, defaultState);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
