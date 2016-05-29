function players(state = [], action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            const newState = [
                ...state,
                {
                    id: new Date().getTime(),
                    name: action.name
                }
            ];
            return newState;
        default:
            return state;
    }
}

export default players;
