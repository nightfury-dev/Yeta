import { put, all } from 'redux-saga/effects';

import CoursesActions from '../redux/CoursesRedux';
import PlayersActions from '../redux/PlayersRedux';


export function* startup (action) {
  yield all([
    put(PlayersActions.fetchPlayers()),
    put(CoursesActions.fetchCourses())
  ]);
}
