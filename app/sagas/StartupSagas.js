import { put } from 'redux-saga/effects';

import PlayersActions from '../redux/PlayersRedux';


export function* startup (action) {
  yield put(PlayersActions.fetchPlayers());
}
