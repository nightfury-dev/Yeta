import { call, put } from 'redux-saga/effects';

import GamesActions from '../redux/GamesRedux';
import CurrentGameActions from '../redux/CurrentGameRedux';
import Games from '../data/Games';


export function* addGame(action) {
  const { courseId, playerIds } = action;
  const game = yield call(Games.save, courseId, playerIds);
  yield put(GamesActions.gameAdded(game));
  yield put(CurrentGameActions.changeCurrentGame(game));
}

export function* removeGame(action) {
  const { game } = action;
  const { id } = game;
  yield call(Games.remove, game);
  yield put(GamesActions.gameRemoved(id));
}

export function* updateHole(action) {
  const { gameId, hole } = action;
  const updatedGame = yield call(Games.updateGameHole, gameId, hole);
  yield put(GamesActions.holeUpdated(updatedGame));
  yield put(CurrentGameActions.changeCurrentGame(updatedGame));
}

export function* updateScore(action) {
  const { gameId, score, newScore } = action;
  const updatedGame = yield call(Games.updateScore, gameId, score, newScore);
  yield put(GamesActions.scoreUpdated(updatedGame));
  yield put(CurrentGameActions.changeCurrentGame(updatedGame));
}

export function* fetchGames() {
  const games = yield call(Games.getAll);
  yield put(GamesActions.gamesFetched(games));
}
