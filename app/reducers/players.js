import * as _ from 'lodash';

import RealmPlayer from '../data/players';


const realmPlayer = new RealmPlayer();

function players(state = [], action) {
    switch (action.type) {
    case 'ADD_PLAYER': {
        const player = {
            id: realmPlayer.getNextPlayerId(),
            name: action.name
        };
        realmPlayer.save(player);
        return [...state, player];
    }
    case 'REMOVE_PLAYER': {
        const index = _.findIndex(state, (p) => p.id === action.id);
        realmPlayer.remove(action.id);
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
        return state;
    }
}

export default players;
