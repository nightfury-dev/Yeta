import * as _ from 'lodash';

import { addPlayer, getNextPlayerId, removePlayer } from '../data/players';


function players(state = [], action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            const player = {
                id: getNextPlayerId(),
                name: action.name
            };
            addPlayer(player);
            return [...state, player];
        case 'REMOVE_PLAYER':
            const index = _.findIndex(state, (p) => p.id === action.id);
            removePlayer(action.id);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}

export default players;
