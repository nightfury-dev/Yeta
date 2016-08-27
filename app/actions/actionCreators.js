import * as _ from 'lodash';
import {addGame, updateGameHole, deleteGame} from '../data/games';
import {saveCourse} from '../data/courses';


export function addPlayer(name) {
    return {
        type: 'ADD_PLAYER',
        name
    };
}

export function removePlayer(id) {
    return {
        type: 'REMOVE_PLAYER',
        id
    };
}

export function createGame(courseId, playerIds, coursePars, callback) {
    return function(dispatch) {
        return addGame(courseId, playerIds).then((savedGame) => dispatch({
            type: 'GAME_CREATED',
            game: savedGame,
            callback
        }));
    };
}

export function updateHole(gameId, hole) {
    return function(dispatch) {
        return updateGameHole(gameId, hole).then((game) => dispatch({
            type: 'HOLE_UPDATED',
            game
        }));
    };
}

export function addCourse(name, pars, callback) {
    return (dispatch) => {
        return saveCourse(name, pars).then((savedCourse) => dispatch({
            type: 'COURSE_ADDED',
            course: savedCourse,
            callback
        }));
    };
}

export function updateScore(gameId, playerId, hole, score) {
    return {
        type: 'UPDATE_SCORE',
        gameId,
        playerId,
        hole,
        score
    };
}

export function removeGame(game) {
    const gameId = game.id;
    return (dispatch) => {
        return deleteGame(game).then(() => dispatch({
            type: 'GAME_REMOVED',
            gameId
        }));
    };
}
