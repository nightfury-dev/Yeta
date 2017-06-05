import { takeLatest, all } from 'redux-saga/effects';

import { PlayersTypes } from '../redux/PlayersRedux';
import { StartupTypes } from '../redux/StartupRedux';

import { addPlayer, fetchPlayers, removePlayer } from './PlayersSagas';
import { startup } from './StartupSagas';


export default function* root() {
  yield all([
    takeLatest(PlayersTypes.ADD_PLAYER, addPlayer),
    takeLatest(PlayersTypes.REMOVE_PLAYER, removePlayer),
    takeLatest(PlayersTypes.FETCH_PLAYERS, fetchPlayers),
    takeLatest(StartupTypes.STARTUP, startup)
  ]);
}
