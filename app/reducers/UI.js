import {
    SHOW_ADD_PLAYER_DIALOG,
    HIDE_ADD_PLAYER_DIALOG
} from '../actions/actionTypes';

function UI(state = {}, action) {
    switch (action.type) {
    case SHOW_ADD_PLAYER_DIALOG:
        return { ...state, showAddPlayerDialog: true };
    case HIDE_ADD_PLAYER_DIALOG:
        return { ...state, showAddPlayerDialog: false };
    default:
        return state;
    }
}

export default UI;
