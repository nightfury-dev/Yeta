import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas';

import { reducer as playersReducer } from './PlayersRedux';
import { reducer as coursesReducer } from './CoursesRedux';
import { reducer as gamesReducer } from './GamesRedux';
import { reducer as currentGameReducer } from './CurrentGameRedux';


export default () => {
  const rootReducer = combineReducers({
    players: playersReducer,
    courses: coursesReducer,
    games: gamesReducer,
    currentGame: currentGameReducer
  });

  return configureStore(rootReducer, rootSaga);
};
