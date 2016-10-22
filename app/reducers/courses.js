import * as _ from 'lodash';

import { COURSE_ADDED, COURSE_UPDATED } from '../actions/actionTypes';


function courses(state = [], action) {
    switch (action.type) {
    case COURSE_ADDED:
        return [...state, action.course];
    case COURSE_UPDATED: {
        const i = _.findIndex(state, (c) => c.id === action.course.id);
        return [
            ...state.slice(0, i),
            action.course,
            ...state.slice(i + 1)
        ];
    }
    default:
        return state;
    }
}

export default courses;
