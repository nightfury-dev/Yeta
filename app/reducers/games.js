import * as _ from 'lodash';

import Games from '../data/games';


const realmGames = new Games();

function games(state = [], action) {
    switch (action.type) {
    case 'GAME_CREATED':
        // action.callback(action.game);
        return [...state, action.game];
    case 'HOLE_UPDATED': {
        const gameIndex = _.findIndex(state, (g) => g.id === action.game.id);
        return [
            ...state.slice(0, gameIndex),
            action.game,
            ...state.slice(gameIndex + 1)
        ];
    }
    case 'SCORE_UPDATED': {
        const i = _.findIndex(state, (g) => g.id === action.game.id);
        return [...state.slice(0, i), action.game, ...state.slice(i + 1)];
    }
    case 'GAME_REMOVED':
        return realmGames.getAll();
    default:
        return state;
    }
}

export default games;
