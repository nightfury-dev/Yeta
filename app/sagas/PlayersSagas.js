import { call, put } from 'redux-saga/effects';

import Games from '../data/Games';
import GamesActions from '../redux/GamesRedux';
import PlayersActions from '../redux/PlayersRedux';
import Players from '../data/Players';


export function* addPlayer(action) {
  const { name } = action;
  const player = yield call(Players.save, name);
  yield put(PlayersActions.playerAdded(player));
}

export function* removePlayer(action) {
  const { id } = action;
  yield call(Players.remove, id);
  yield put(PlayersActions.playerRemoved(id));
}

export function* fetchPlayers() {
  const players = yield call(Players.getAll);
  yield put(PlayersActions.playersFetched(players));
}

export function* changeName(action) {
  const { player, name } = action;
  const updatedPlayer = yield call(Players.changeName, player, name);

  yield put(PlayersActions.nameChanged(updatedPlayer));

  const games = yield call(Games.getAll);
  yield put(GamesActions.gamesUpdated(games));
}
