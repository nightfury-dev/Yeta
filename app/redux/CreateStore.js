/* global __DEV__, require */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  /* eslint-disable no-underscore-dangle */
  /* eslint-disable no-undef */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  /* eslint-enable */

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};
