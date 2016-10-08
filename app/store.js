/* global __DEV__, require */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import RealmPlayer from './data/players';
import RealmCourse from './data/courses';
import RealmGame from './data/games';

const createReactotronEnhancer = __DEV__ && require('reactotron-redux');


const realmPlayer = new RealmPlayer();
const realmCourse = new RealmCourse();
const realmGame = new RealmGame();

const defaultState = {
    players: realmPlayer.getAll(),
    courses: realmCourse.getAll(),
    games: realmGame.getAll()
};

const enhancers = [applyMiddleware(thunk)];

if (__DEV__) {
    const reactotronEnhancer = createReactotronEnhancer(console.tron);
    enhancers.push(reactotronEnhancer);
}

const store = createStore(rootReducer, defaultState, compose(...enhancers));

export default store;
