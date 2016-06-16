function games(state = [], action) {
    switch (action.type) {
        case 'CREATE_GAME':
            const game = {
                id: new Date().getTime(),
                timeBegin: new Date(),
                players: action.players,
                course: action.course,
                scores: {},
                currentHole: 1
            };
            return [...state, game];
        default:
            return state;
    }
    return state;
}

export default games;
