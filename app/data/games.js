import * as _ from 'lodash';

import realm from './realm';
import {getPlayers} from './players';


function getGames() {
    return _.values(realm.objects('Game'));
}

function getNextId(schema) {
    if (realm.objects(schema).length === 0) {
        return 1;
    }
    return _.chain(realm.objects(schema))
        .map((p) => p.id)
        .max()
        .value() + 1;
}

function getNextGameId() {
    return getNextId('Game');
}

function getNextScoreId() {
    return getNextId('Score');
}

function updateGameHole(gameId, newHole) {
    return new Promise((success, error) => {
        const realmGame = realm.objects('Game').filtered('id = ' + gameId)['0'];
        realm.write(() => {
            realmGame.currentHole = newHole;
            success(realmGame);
        });
    });
}

function addGame(courseId, playerIds) {
    return new Promise((success, failure) => {
        realm.write(() => {
            let newGame = realm.create('Game', {
                id: getNextGameId(),
                timeBegin: new Date()
            });

            const realmCourse = realm.objects('Course')
                .filtered('id = ' + courseId)['0'];
            newGame.course = realmCourse;

            playerIds.forEach((playerId) => {
                const realmPlayer = realm.objects('Player')
                    .filtered('id = ' + playerId)['0'];
                newGame.players.push(realmPlayer);
            });

            _.values(newGame.players).forEach((player) => {
                _.values(newGame.course.holes).forEach((hole) => {
                    let score = realm.create('Score', {
                        id: getNextScoreId(),
                        score: hole.par,
                        player,
                        hole
                    });
                    newGame.scores.push(score);
                });
            });

            const savedGame = realm.objects('Game').filtered('id = ' + newGame.id)[0];
            success(savedGame);
        });
    });
}

export {addGame, getNextGameId, getGames, updateGameHole}
