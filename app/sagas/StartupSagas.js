import { put, all } from 'redux-saga/effects';

import CoursesActions from '../redux/CoursesRedux';
import GamesActions from '../redux/GamesRedux';
import PlayersActions from '../redux/PlayersRedux';

/* eslint import/prefer-default-export: 0 */
export function* startup() {
  yield all([
    put(PlayersActions.fetchPlayers()),
    put(GamesActions.fetchGames()),
    put(CoursesActions.fetchCourses()),
  ]);
}
