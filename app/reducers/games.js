import * as _ from 'lodash';

import RealmGame from '../data/games';
import realm from '../data/realm';


const realmGame = new RealmGame();

function games(state = [], action) {
    switch (action.type) {
        case 'CREATE_GAME':
            return state;
        case 'GAME_CREATED':
            action.callback(action.game);
            return [...state, action.game];
        case 'HOLE_UPDATED':
            const gameIndex = _.findIndex(state, (g) => g.id === action.game.id);
            return [
                ...state.slice(0, gameIndex),
                action.game,
                ...state.slice(gameIndex + 1)
            ];
        case 'UPDATE_SCORE':
            const i = _.findIndex(state, (g) => g.id === action.gameId);
            const key = _.findKey(state[i].scores, (score) => {
                return score.player.id === action.playerId && score.hole.holenumber === action.hole;
            });
            const newScores = {...state[i].scores};
            realm.write(() => {
                newScores[key].score = action.score;
            });
            return [
                ...state.slice(0, i),
                {
                    ...state[i],
                    scores: newScores
                },
                ...state.slice(i + 1)
            ];
        case 'GAME_REMOVED':
            return realmGame.getGames();
        default:
            return state;
    }
    return state;
}

export default games;
