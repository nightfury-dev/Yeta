import { takeLatest, all } from 'redux-saga/effects';

import { CoursesTypes } from '../redux/CoursesRedux';
import { GamesTypes } from '../redux/GamesRedux';
import { PlayersTypes } from '../redux/PlayersRedux';
import { StartupTypes } from '../redux/StartupRedux';

import {
  addCourse,
  fetchCourses,
  updateCourse,
  removeCourse,
  updateNote
} from './CoursesSagas';
import {
  addGame,
  fetchGames,
  updateHole,
  updateScore,
  removeGame
} from './GamesSagas';
import {
  addPlayer,
  fetchPlayers,
  removePlayer,
  changeName
} from './PlayersSagas';
import { startup } from './StartupSagas';


export default function* root() {
  yield all([
    takeLatest(PlayersTypes.ADD_PLAYER, addPlayer),
    takeLatest(PlayersTypes.REMOVE_PLAYER, removePlayer),
    takeLatest(PlayersTypes.FETCH_PLAYERS, fetchPlayers),
    takeLatest(PlayersTypes.CHANGE_NAME, changeName),

    takeLatest(CoursesTypes.ADD_COURSE, addCourse),
    takeLatest(CoursesTypes.UPDATE_COURSE, updateCourse),
    takeLatest(CoursesTypes.FETCH_COURSES, fetchCourses),
    takeLatest(CoursesTypes.REMOVE_COURSE, removeCourse),
    takeLatest(CoursesTypes.UPDATE_NOTE, updateNote),

    takeLatest(GamesTypes.ADD_GAME, addGame),
    takeLatest(GamesTypes.UPDATE_HOLE, updateHole),
    takeLatest(GamesTypes.UPDATE_SCORE, updateScore),
    takeLatest(GamesTypes.REMOVE_GAME, removeGame),
    takeLatest(GamesTypes.FETCH_GAMES, fetchGames),

    takeLatest(StartupTypes.STARTUP, startup)
  ]);
}
