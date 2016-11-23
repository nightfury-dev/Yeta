import * as _ from 'lodash';

import Games from '../data/Games';
import {
  GAME_CREATED,
  HOLE_UPDATED,
  SCORE_UPDATED,
  GAME_REMOVED,
  COURSE_UPDATED
} from '../actions/actionTypes';


const realmGames = new Games();

function games(state = [], action) {
  switch (action.type) {
    case GAME_CREATED:
        // action.callback(action.game);
      return [...state, action.game];
    case HOLE_UPDATED: {
      const gameIndex = _.findIndex(state, (g) => g.id === action.game.id);
      return [
        ...state.slice(0, gameIndex),
        action.game,
        ...state.slice(gameIndex + 1)
      ];
    }
    case SCORE_UPDATED: {
      const i = _.findIndex(state, (g) => g.id === action.game.id);
      return [...state.slice(0, i), action.game, ...state.slice(i + 1)];
    }
    case COURSE_UPDATED: {
      return realmGames.getAll();
    }
    case GAME_REMOVED:
      return realmGames.getAll();
    default:
      return state;
  }
}

export default games;
