import * as _ from 'lodash';

function players(state = [], action) {
    switch (action.type) {
    case 'PLAYER_ADDED': {
        return [...state, action.player];
    }
    case 'PLAYER_REMOVED': {
        const index = _.findIndex(state, (p) => p.id === action.id);
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
        return state;
    }
}

export default players;
