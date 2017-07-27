import { call, put } from 'redux-saga/effects';

import CoursesActions from '../redux/CoursesRedux';
import Courses from '../data/Courses';
import GamesActions from '../redux/GamesRedux';
import Games from '../data/Games';

export function* addCourse(action) {
  const { name, pars } = action;
  const course = yield call(Courses.save, name, pars);
  yield put(CoursesActions.courseAdded(course));
}

export function* updateCourse(action) {
  const { course, name, pars } = action;
  const updatedCourse = yield call(Courses.update, course, name, pars);
  const games = yield call(Games.getAll);

  yield put(CoursesActions.courseUpdated(updatedCourse));
  yield put(GamesActions.gamesUpdated(games));
}

export function* fetchCourses() {
  const courses = yield call(Courses.getAll);
  yield put(CoursesActions.coursesFetched(courses));
}

export function* removeCourse(action) {
  const { courseId } = action;
  yield call(Courses.remove, courseId);
  yield put(CoursesActions.courseRemoved(courseId));

  const games = yield call(Games.getAll);
  yield put(GamesActions.gamesUpdated(games));
}

export function* updateNote(action) {
  const { course, hole, note } = action;

  const updatedCourse = yield call(Courses.updateNote, course, hole, note);
  const games = yield call(Games.getAll);

  yield put(CoursesActions.courseUpdated(updatedCourse));
  yield put(GamesActions.gamesUpdated(games));
}
