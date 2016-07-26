function courses(state = [], action) {
    switch (action.type) {
        case 'ADD_COURSE':
            const newCourse = {
                id: new Date().getTime(),
                name: action.name,
                pars: action.pars
            };
            return [...state, newCourse]
        default:
            return state;
    }
}

export default courses;
