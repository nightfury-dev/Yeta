import * as _ from 'lodash';

import { normalizeGame as normalize } from './Normalizers';
import { getNextGameId, getNextScoreId } from './Utils';
import realm from './realm';


const games = realm.objects('Game');
const courses = realm.objects('Course');
const players = realm.objects('Player');

class Games {
    getAll() {
        return _.map(games, normalize);
    }

    save(courseId, playerIds) {
        return new Promise((success) => {
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
    }

    updateGameHole(gameId, newHole) {
        return new Promise((success) => {
            const game = realm.objectForPrimaryKey('Game', gameId);
            realm.write(() => {
                game.currentHole = newHole;
                success(normalize(game));
            });
        });
    }

    updateScore(gameId, score, newScore) {
        return new Promise((success) => {
            const realmScore = realm.objectForPrimaryKey('Score', score.id);
            const game = realm.objectForPrimaryKey('Game', gameId);
            realm.write(() => {
                realmScore.score = newScore;
                success(normalize(game));
            });
        });
    }

    remove(game) {
        return new Promise((success) => {
            const realmGame = realm.objectForPrimaryKey('Game', game.id);
            realm.write(() => {
                realm.delete(realmGame);
                success();
            });
        });
    }
}

export default Games;
