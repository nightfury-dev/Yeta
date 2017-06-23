import * as _ from 'lodash';

import { normalizePlayer as normalize } from './Normalizers';
import { getNextPlayerId } from './Utils';
import realm from './realm';


const players = realm.objects('Player');
const scores = realm.objects('Score');
const games = realm.objects('Game');

const getAll = () => _.map(players, normalize);

const findById = (id) => {
  const result = players.filtered(`id = ${id}`);
  if (!result.length) {
    throw new Error(`No Player with id "${id}" found.`);
  }
  return _.first(result);
};

const save = (name) => new Promise((success) => {
  realm.write(() => {
    const player = {
      id: getNextPlayerId(),
      name
    };
    const savedPlayer = realm.create('Player', player);
    success(normalize(savedPlayer));
  });
});

const remove = (id) => new Promise((success) => {
  const player = findById(id);
  const removableScores = scores.filtered('player.id = $0', id);
  realm.write(() => {
    _.forEach(games, (game) => {
      const newPlayers = _.filter(game.players, (p) => p.id !== id);
      if (newPlayers.length !== game.players.length) {
        game.players = newPlayers;
      }

      if (game.players.length === 0) {
        realm.delete(game);
      }
    });

    realm.delete(removableScores);
    realm.delete(player);
    success();
  });
});

const changeName = (player, name) => new Promise((success) => {
  const p = findById(player.id);
  realm.write(() => {
    p.name = name;
    success(normalize(p));
  });
});

export default {
  getAll,
  findById,
  save,
  remove,
  changeName
};
