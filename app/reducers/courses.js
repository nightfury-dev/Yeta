import { COURSE_ADDED } from '../actions/actionTypes';

function courses(state = [], action) {
    switch (action.type) {
    case COURSE_ADDED:
        return [...state, action.course];
    default:
        return state;
    }
}

export default courses;
