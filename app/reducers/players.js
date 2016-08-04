import * as _ from 'lodash';


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
        case 'REMOVE_PLAYER':
            const index = _.findIndex(state, (p) => p.id === action.id);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}

export default players;
