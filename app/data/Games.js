import * as _ from 'lodash';

import { normalizeGame as normalize } from './Normalizers';
import { getNextGameId, getNextScoreId } from './Utils';
import realm from './realm';


const games = realm.objects('Game');
const courses = realm.objects('Course');
const players = realm.objects('Player');


const getAll = () => _.map(games, normalize);

const save = (courseId, playerIds) => new Promise((success) => {
  realm.write(() => {
    const newGame = realm.create('Game', {
      id: getNextGameId(),
      timeBegin: new Date()
    });

    newGame.course = _.first(
      courses.filtered('id = $0', courseId)
    );

    playerIds.forEach((playerId) => {
      newGame.players.push(
        _.first(players.filtered('id = $0', playerId))
      );
    });

    _.forEach(newGame.players, (player) => {
      _.forEach(newGame.course.holes, (hole) => {
        const score = realm.create('Score', {
          id: getNextScoreId(),
          score: hole.par,
          player,
          hole
        });
        newGame.scores.push(score);
      });
    });

    success(normalize(newGame));
  });
});

const updateGameHole = (gameId, newHole) => new Promise((success) => {
  const game = realm.objectForPrimaryKey('Game', gameId);
  realm.write(() => {
    game.currentHole = newHole;
    success(normalize(game));
  });
});

const updateScore = (gameId, score, newScore) => new Promise((success) => {
  const realmScore = realm.objectForPrimaryKey('Score', score.id);
  const game = realm.objectForPrimaryKey('Game', gameId);
  realm.write(() => {
    realmScore.score = newScore;
    success(normalize(game));
  });
});

const remove = (game) => new Promise((success) => {
  const realmGame = realm.objectForPrimaryKey('Game', game.id);
  realm.write(() => {
    realm.delete(realmGame.scores);
    realm.delete(realmGame);
    success();
  });
});

export default {
  getAll,
  save,
  updateGameHole,
  updateScore,
  remove
};
