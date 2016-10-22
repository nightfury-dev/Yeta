import * as _ from 'lodash';

import realm from './realm';


const getNextId = (schema) => {
    if (realm.objects(schema).length === 0) {
        return 1;
    }
    return _.chain(realm.objects(schema))
        .map((p) => p.id)
        .max()
        .value() + 1;
};

const getNextGameId = () => getNextId('Game');

const getNextScoreId = () => getNextId('Score');

const normalizePlayer = (player) => ({ ...player });

const normalizeHole = (hole) => ({ ...hole });

const normalizeScore = (score) => ({
    ...score,
    player: normalizePlayer(score.player),
    hole: normalizeHole(score.hole)
});

const normalizeCourse = (course) => ({
    id: course.id,
    name: course.name,
    holes: _.values(course.holes).map(normalizeHole)
});

const normalize = (game) => ({
    ...game,
    players: _.values(game.players).map(normalizePlayer),
    course: normalizeCourse(game.course),
    scores: _.values(game.scores).map(normalizeScore)
});

class Games {
    getAll() {
        return _.values(realm.objects('Game')).map(normalize);
    }

    save(courseId, playerIds) {
        return new Promise((success) => {
            realm.write(() => {
                const newGame = realm.create('Game', {
                    id: getNextGameId(),
                    timeBegin: new Date()
                });

                const realmCourse = realm.objects('Course')
                    .filtered(`id = ${courseId}`)['0'];
                newGame.course = realmCourse;

                playerIds.forEach((playerId) => {
                    const realmPlayer = realm.objects('Player')
                        .filtered(`id = ${playerId}`)['0'];
                    newGame.players.push(realmPlayer);
                });

                _.values(newGame.players).forEach((player) => {
                    _.values(newGame.course.holes).forEach((hole) => {
                        const score = realm.create('Score', {
                            id: getNextScoreId(),
                            score: hole.par,
                            player,
                            hole
                        });
                        newGame.scores.push(score);
                    });
                });

                const savedGame = realm.objects('Game')
                    .filtered(`id = ${newGame.id}`)[0];
                success(normalize(savedGame));
            });
        });
    }

    updateGameHole(gameId, newHole) {
        return new Promise((success) => {
            const realmGame = realm.objectForPrimaryKey('Game', gameId);
            realm.write(() => {
                realmGame.currentHole = newHole;
                success(normalize(realmGame));
            });
        });
    }

    updateScore(gameId, score, newScore) {
        return new Promise((success) => {
            const scoreObj = realm.objectForPrimaryKey('Score', score.id);
            const game = realm.objectForPrimaryKey('Game', gameId);
            realm.write(() => {
                scoreObj.score = newScore;
                success(normalize(game));
            });
        });
    }

    remove(game) {
        return new Promise((success) => {
            realm.write(() => {
                const realmGame = realm.objectForPrimaryKey('Game', game.id);
                realm.delete(realmGame);
                success();
            });
        });
    }
}

export default Games;
