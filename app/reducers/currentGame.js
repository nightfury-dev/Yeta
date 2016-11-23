import {
  GAME_CREATED,
  HOLE_UPDATED,
  SCORE_UPDATED,
  CURRENT_GAME_CHANGED
} from '../actions/actionTypes';

function currentGame(state = null, action) {
  switch (action.type) {
    case CURRENT_GAME_CHANGED: {
      return action.game;
    }
    case HOLE_UPDATED: {
      return action.game;
    }
    case SCORE_UPDATED: {
      return action.game;
    }
    case GAME_CREATED: {
      return action.game;
    }
    default:
      return state;
  }
}

export default currentGame;
