import { takeLatest, all } from 'redux-saga/effects';

import { CoursesTypes } from '../redux/CoursesRedux';
import { PlayersTypes } from '../redux/PlayersRedux';
import { StartupTypes } from '../redux/StartupRedux';

import { addPlayer, fetchPlayers, removePlayer } from './PlayersSagas';
import { addCourse, fetchCourses, updateCourse } from './CoursesSagas';
import { startup } from './StartupSagas';


export default function* root() {
  yield all([
    takeLatest(PlayersTypes.ADD_PLAYER, addPlayer),
    takeLatest(PlayersTypes.REMOVE_PLAYER, removePlayer),
    takeLatest(PlayersTypes.FETCH_PLAYERS, fetchPlayers),

    takeLatest(CoursesTypes.ADD_COURSE, addCourse),
    takeLatest(CoursesTypes.UPDATE_COURSE, updateCourse),
    takeLatest(CoursesTypes.FETCH_COURSES, fetchCourses),

    takeLatest(StartupTypes.STARTUP, startup)
  ]);
}
