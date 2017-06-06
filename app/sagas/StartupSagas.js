import { put, all } from 'redux-saga/effects';

import CoursesActions from '../redux/CoursesRedux';
import GamesActions from '../redux/GamesRedux';
import PlayersActions from '../redux/PlayersRedux';


export function* startup (action) {
  yield all([
    put(PlayersActions.fetchPlayers()),
    put(GamesActions.fetchGames()),
    put(CoursesActions.fetchCourses()),
  ]);
}
