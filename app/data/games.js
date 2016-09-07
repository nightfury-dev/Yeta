import * as _ from 'lodash';

import realm from './realm';


class RealmGame {
    getAll() {
        return _.values(realm.objects('Game'));
    }

    getNextId(schema) {
        if (realm.objects(schema).length === 0) {
            return 1;
        }
        return _.chain(realm.objects(schema))
            .map((p) => p.id)
            .max()
            .value() + 1;
    }

    getNextGameId() {
        return this.getNextId('Game');
    }

    getNextScoreId() {
        return this.getNextId('Score');
    }

    updateGameHole(gameId, newHole) {
        return new Promise((success) => {
            const realmGame = realm.objects('Game')
                .filtered(`id = ${gameId}`)['0'];
            realm.write(() => {
                realmGame.currentHole = newHole;
                success(realmGame);
            });
        });
    }

    save(courseId, playerIds) {
        return new Promise((success) => {
            realm.write(() => {
                const newGame = realm.create('Game', {
                    id: this.getNextGameId(),
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
                            id: this.getNextScoreId(),
                            score: hole.par,
                            player,
                            hole
                        });
                        newGame.scores.push(score);
                    });
                });

                const savedGame = realm.objects('Game')
                    .filtered(`id = ${newGame.id}`)[0];
                success(savedGame);
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

export default RealmGame;
