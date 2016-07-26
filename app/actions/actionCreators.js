export function addPlayer(name) {
    return {
        type: 'ADD_PLAYER',
        name
    };
}

export function removePlayer(id) {
    return {
        type: 'REMOVE_PLAYER',
        id
    };
}

export function createGame(courseId, playerIds, coursePars) {
    return {
        type: 'CREATE_GAME',
        course: courseId,
        players: playerIds,
        pars: coursePars
    };
}

export function updateHole(gameId, hole) {
    return {
        type: 'UPDATE_HOLE',
        game: gameId,
        hole
    };
}

export function addCourse(name, pars) {
    return {
        type: 'ADD_COURSE',
        name,
        pars
    };
}