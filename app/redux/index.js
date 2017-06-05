import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas';

import { reducer as playersReducer } from './PlayersRedux';

export default () => {
  const rootReducer = combineReducers({
    players: playersReducer
  });

  return configureStore(rootReducer, rootSaga);
};
