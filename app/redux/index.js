import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas';

import { reducer as playersReducer } from './PlayersRedux';
import { reducer as coursesReducer } from './CoursesRedux';


export default () => {
  const rootReducer = combineReducers({
    players: playersReducer,
    courses: coursesReducer
  });

  return configureStore(rootReducer, rootSaga);
};
