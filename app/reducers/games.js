import * as _ from 'lodash';


function games(state = [], action) {
    switch (action.type) {
        case 'CREATE_GAME':
            const game = {
                id: new Date().getTime(),
                timeBegin: new Date(),
                players: action.players,
                course: action.course,
                scores: _.zipObject(
                    action.players,
                    Array(action.players.length).fill(action.pars)
                ),
                currentHole: 1
            };
            return [...state, game];
        case 'UPDATE_HOLE':
            const index = _.findIndex(state, (g) => g.id === action.game );
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    currentHole: action.hole
                },
                ...state.slice(index + 1)
            ];

            return state;
        default:
            return state;
    }
    return state;
}

export default games;
