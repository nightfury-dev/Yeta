import * as _ from 'lodash';
import { createActions, createReducer } from 'reduxsauce';


const { Types, Creators } = createActions({
  addCourse: ['name', 'pars'],
  courseAdded: ['course'],
  updateCourse: ['course', 'name', 'pars'],
  courseUpdated: ['course'],
  fetchCourses: null,
  coursesFetched: ['courses'],
  removeCourse: ['courseId'],
  courseRemoved: ['courseId']
});

export const CoursesTypes = Types;
export default Creators;

// -- initial state for courses

const INITIAL_STATE = [];

// -- reducers

const add = (state = INITIAL_STATE, { course }) => [...state, course];

const update = (state = INITIAL_STATE, { course }) => {
  const index = _.findIndex(state, (c) => c.id === course.id);
  return [...state.slice(0, index), course, ...state.slice(index + 1)];
};

const fetchSuccess = (state = INITIAL_STATE, { courses }) =>
  [...state, ...courses];

const remove = (state = INITIAL_STATE, { courseId }) => {
  const index = _.findIndex(state, (course) => course.id === courseId);
  return [...state.slice(0, index), ...state.slice(index + 1)];
};

// -- tie up the reducers to action types

const HANDLERS = {
  [Types.COURSE_ADDED]: add,
  [Types.COURSE_UPDATED]: update,
  [Types.COURSES_FETCHED]: fetchSuccess,
  [Types.COURSE_REMOVED]: remove
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
