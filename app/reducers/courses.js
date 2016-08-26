function courses(state = [], action) {
    switch (action.type) {
        case 'COURSE_ADDED':
            action.callback(action.course);
            return [...state, action.course]
        default:
            return state;
    }
}

export default courses;
