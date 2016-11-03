/* global __DEV__, require */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import Players from './data/Players';
import Courses from './data/Courses';
import Games from './data/Games';

const createReactotronEnhancer = __DEV__ && require('reactotron-redux');


const players = new Players();
const courses = new Courses();
const games = new Games();

const defaultState = {
    players: players.getAll(),
    courses: courses.getAll(),
    games: games.getAll(),
    currentGame: null,
    UI: {
        showAddPlayerDialog: false
    }
};

const enhancers = [applyMiddleware(thunk)];

if (__DEV__) {
    const reactotronEnhancer = createReactotronEnhancer(console.tron);
    enhancers.push(reactotronEnhancer);
}

const store = createStore(rootReducer, defaultState, compose(...enhancers));

export default store;
