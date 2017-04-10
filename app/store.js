/* global __DEV__, require */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import players from './data/Players';
import courses from './data/Courses';
import games from './data/Games';

const createReactotronEnhancer = __DEV__ && require('reactotron-redux');


const defaultState = {
  players: players.getAll(),
  courses: courses.getAll(),
  games: games.getAll(),
  currentGame: null
};

const enhancers = [applyMiddleware(thunk)];

if (__DEV__) {
  const reactotronEnhancer = createReactotronEnhancer(console.tron);
  enhancers.push(reactotronEnhancer);
}

const store = createStore(rootReducer, defaultState, compose(...enhancers));

export default store;
